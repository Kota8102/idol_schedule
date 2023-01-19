import React, { useState, useEffect, useContext } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import jaLocale from '@fullcalendar/core/locales/ja';
import listPlugin from '@fullcalendar/list';

import CheckboxContext from '../../contexts/CheckboxContext';

import "../../styles/calendar.sass"

const Calendar: React.FC = (): JSX.Element => {

    const [events, setEvents] = useState([]);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { checkList, setCheckList, groupidList, setGroupidList } = useContext(CheckboxContext);

    useEffect(() => {
        // APIからJSONデータを取得
        const fetchEvents = async () => {
          const res = await fetch('https://jbwg9oogwc.execute-api.ap-northeast-1.amazonaws.com/json', {
            method: 'POST',
            mode: "cors",
            headers: {
              'Content-Type': 'application/json',
            },
          });
          const data = await res.json();

          setEvents(data);
        };
        fetchEvents();
      }, []);

      const filterevents = events.filter((info: { groupId: string; }) => {
        return groupidList.includes(info.groupId);
      });
      
    return (
      <div className='calendar'>
        <FullCalendar
            plugins={[dayGridPlugin, listPlugin]}
            initialView="dayGridMonth"
            locales={[jaLocale]}
            locale="ja"
            contentHeight={"auto"}
            headerToolbar={
                { left: 'prev today next', center: 'title', right: 'dayGridMonth listMonth'}
            }
            businessHours={{ daysOfWeek: [1, 2, 3, 4, 5] }}
            events={filterevents}

            // eventのcssを調整
            eventDidMount={(info) => {
                const event = info.event;
                const element = info.el;

                element.style.borderColor = 'transparent';
                element.classList.add('text-xs', 'leading-5', 'tracking-wide', 'pl-1',);
                
                // group毎の色を決定
                if (event.groupId === '1') {
                    element.style.backgroundColor = '#a855f7';
                } else if (event.groupId === '2') {
                    element.style.backgroundColor = '#059669';
                } else if (event.groupId === '3') {
                  element.style.backgroundColor = '#f43f5e';
                }
                else if (event.groupId === '4') {
                  element.style.backgroundColor = '#0284c7';
                }
                else if (event.groupId === '5') {
                  element.style.backgroundColor = '#0284c7';
                }
                
                // hober時の動作
                element.addEventListener('mouseenter', () => {
                    element.style.opacity = '0.6';
                });
                element.addEventListener('mouseleave', () => {
                    element.style.opacity = '1';
                });
              }}
              
            // eventのクリック時の動作
            eventClick={info => {
                window.open(info.event.url, "_self");
                // window.open(info.event.url, "_blank");
              }}
        />

      </div>
    );
  }
  
  export default Calendar;
  
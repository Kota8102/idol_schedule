import React, { useState, useEffect, useContext } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import jaLocale from '@fullcalendar/core/locales/ja';
import listPlugin from '@fullcalendar/list';

import CheckboxContext from '../../contexts/CheckboxContext';
import LoadingContext from '../../contexts/LoadingContext';
import ModalContext from '../../contexts/ModalContext';

import "../../styles/calendar.sass"
import ModalComp from './modal';

const Calendar: React.FC = (): JSX.Element => {

    const [events, setEvents] = useState([]);

    const groupColors: { [key: string]: string } = {
      '1': '#a855f7',
      '2': '#059669',
      '3': '#f43f5e',
      '4': '#0d9488',
      '5': '#0284c7',
      '6': '#2563eb',
      '7': '#d946ef',
      '8': '#ec4899',
      '9': '#404040',
      '10': '#64748b',
      '11': '#0d9488',
      '12': '#d97706',
      '13': '#6d28d9'
    };

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { checkList, setCheckList, groupidList, setGroupidList } = useContext(CheckboxContext);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { isLoading, setIsLoading } = useContext(LoadingContext);

    // eslint-disable-next-line @typescript-eslint/no-redeclare, @typescript-eslint/no-unused-vars
    const {showModal, setShowModal, ModalEvent, setModalEvent} = useContext(ModalContext);

    useEffect(() => {
        // APIからJSONデータを取得
        const fetchEvents = async () => {
          setIsLoading(true);
          
          const res = await fetch('https://p1crz86hlk.execute-api.ap-northeast-1.amazonaws.com/production/events', {
            method: 'POST',
            mode: "cors",
            headers: {
              'Content-Type': 'application/json',
            },
          });

          const data = await res.json();

          // setEvents(data);
          setEvents(JSON.parse(data.body));
          setIsLoading(false);
        };
        fetchEvents();
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
      
      // console.log(events)s
      const filterevents = events.filter((info: { groupId: string; }) => {
        return groupidList.includes(info.groupId);
      });
        
    return (
      <div className='calendar'>
        <FullCalendar
            plugins = {[dayGridPlugin, listPlugin]}
            initialView = "dayGridMonth"
            locales = {[jaLocale]}
            dayMaxEvents = {6}
            locale = "ja"
            contentHeight = {"auto"}
            headerToolbar = {
                { left: 'prev today next', center: 'title', right: 'dayGridMonth listMonth'}
            }
            businessHours = {{ daysOfWeek: [1, 2, 3, 4, 5] }}
            events = {filterevents}
            // events = {events}

            // eventのcssを調整
            eventDidMount = {(info) => {
                const event = info.event;
                const element = info.el;

                element.style.borderColor = 'transparent';
                element.classList.add('text-xs', 'leading-5', 'tracking-wide', 'pl-1',);
                
                // group毎の色を決定
                element.style.backgroundColor = groupColors[event.groupId] || 'white';
                
                // hober時の動作
                element.addEventListener('mouseenter', () => {
                    element.style.opacity = '0.6';
                });
                element.addEventListener('mouseleave', () => {
                    element.style.opacity = '1';
                });
              }}
              
            // eventのクリック時の動作
            eventClick = {info => {
              const event = info.event;

              console.log(event.extendedProps.description)

              let dateValue: Date | null = null;
              
              if (event.start) {
                dateValue = new Date(event.start);
              }
              
              let formatdateValue = '';
              if (dateValue) {
                formatdateValue = dateValue.toLocaleDateString('ja-JP', {month: '2-digit', day: '2-digit', weekday: 'short'});
              }
              
              setShowModal(true);
              setModalEvent([event.title, formatdateValue, event.extendedProps.description, event.extendedProps.location, event.extendedProps.idolname]);
              
              }}
        />
            {showModal && (<ModalComp />)}
      </div>
    );
  }
  
  export default Calendar;
  
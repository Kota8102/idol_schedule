import React, { useState, useContext } from "react";

import CheckboxContext from '../../contexts/CheckboxContext';

export default function Toggle() {

    const [enabled, setEnabled] = useState(true);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { checkList, setCheckList, groupidList, setGroupidList } = useContext(CheckboxContext);

    return (
        <div className="relative flex flex-col items-center overflow-hidden">
            <div className="flex">
                <label className="inline-flex relative items-center mr-5 cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={enabled}
                        readOnly
                    />
                    <div
                        onClick={() => {
                            if (!enabled) {
                                setGroupidList(Array.from({length: 13}, (_, i) => i + 1).map(i => i.toString()));
                                setCheckList(new Array(13).fill(true));
                            } else {
                                setGroupidList([]);
                                setCheckList(new Array(13).fill(false));
                            }
                            setEnabled(!enabled);
                        }}
                        className="w-11 h-6 bg-gray-200 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-900">
                        全てをチェック
                    </span>
                </label>
            </div>
        </div>
    );
}
import React from "react";

import Checkbox from "../atom/checkbox";


const IdolsList:React.FC = () => {

    const idols = [
        { name: "yosugala", color: "accent-purple-500", groupid: "1"},
        { name: "きのホ。", color: "accent-emerald-600", groupid: "2"},
        { name: "SANDAL TELEPHONE", color: "accent-rose-500", groupid: "3"},
        { name: "タイトル未定", color: "accent-sky-600", groupid: "4"},
        { name: "タイトル未定", color: "accent-sky-600", groupid: "5"}
      ];

    return(

        <div className="mt-1 md:mt-16">
            <h2 className="ml-1 text-lg">アイドル一覧</h2>
                <div className="flex flex-wrap md:flex-col">           
                {idols.map((idol, index) => (
                <Checkbox key={index} inp_name={idol.name} color={idol.color} index={index} groupid={idol.groupid} />
                ))}
                    {/* {idols.map((idol, index) => (
                    <Checkbox key={index} name={idol.name} isCheck={true} color={idol.color} />
                    ))} */}
                </div>
        </div>

    )


}

export default IdolsList
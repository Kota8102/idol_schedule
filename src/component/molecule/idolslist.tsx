import React from "react";

import Checkbox from "../atom/checkbox";

type Props ={
    name: string
    color: string
    groupid: string
}

const IdolsList:React.FC<{ idols:Props[] }> = ({ idols }) => {

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
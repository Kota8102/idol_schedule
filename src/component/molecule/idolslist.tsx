import React from "react";

import Checkbox from "../atom/checkbox";
import Toggle from "../atom/toggle";

type Props ={
    name: string
    color: string
    groupid: string
}

const IdolsList:React.FC<{ idols:Props[] }> = ({ idols }) => {

    return(

        <div className="mt-1 flex flex-col md:mt-16">
            <h2 className="ml-1 text-xl font-medium">Idol List</h2>
    
            <div className="flex flex-wrap md:flex-col">           
                {idols.map((idol, index) => (
                <Checkbox key={index} inp_name={idol.name} color={idol.color} index={index} groupid={idol.groupid} />
                ))}
            </div>
            <div className="mt-3">
                <Toggle />
            </div>
            
        </div>

    )


}

export default IdolsList
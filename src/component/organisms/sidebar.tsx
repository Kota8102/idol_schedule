import React from "preact/compat";

import IdolsList from "../molecule/idolslist";

import { idols } from "../atom/idols";

type Props = {
    isIdolslist?: boolean
}

const Sidebar: React.FC<Props> = ( {isIdolslist} ) =>{

    return (
        <div>
            {isIdolslist ? <IdolsList idols={idols}/> : null}
        </div>

    );
}

export default Sidebar;

// const Sidebar: React.FC<SidebarProps> = ({ idols }) => {
//     const handleCheckboxChange = (isChecked: boolean, name: string) => {
//       // idolsを更新する処理
//       const updatedIdols = idols.map(idol => {
//         if (idol.name === name) {
//           return { ...idol, checked: isChecked };
//         }
//         return idol;
//       });
//       // idolsを更新する処理
//     }
  
//     return (
//       <div className="flex flex-col">
//         <div className="mx-auto">
//           <h2>アイドル一覧</h2>
//         </div>
//         <div>
//           {idols.map((idol, index) => (
//             <Checkbox key={index} name={idol.name} onChange={handleCheckboxChange} checked={idol.checked} />
//           ))}
//         </div>
//       </div>
//     );
//   };
  

import React, { ReactNode, useState } from 'react'

import CheckboxContext from "./CheckboxContext";
import LoadingContext from "./LoadingContext";

type Props = {
    children: ReactNode;
  }

const AppContext: React.FC<Props> = ( { children } ) => {

    const [isLoading, setIsLoading] = useState(false)

    const [groupidList,setGroupidList] = useState<string[]>(Array.from({length: 13}, (_, i) => i + 1).map(i => i.toString()));
    const [checkList, setCheckList] = useState<boolean[]>(new Array(13).fill(true));

    return (
        <CheckboxContext.Provider value={{ checkList, setCheckList, groupidList, setGroupidList }}>
            <LoadingContext.Provider value={{ isLoading, setIsLoading}} >
                {children}
            </LoadingContext.Provider>
        </CheckboxContext.Provider>
    )

}

export default AppContext
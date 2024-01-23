import { useContext, createContext, useState, useEffect } from "react";

const ApppContext = createContext();

export const AppProvider = ({children}) => {

    const actions = {
        
    }

    const store = {
        
    }

    return (
        <ApppContext.Provider value={{actions, store}}>
            {children}
        </ApppContext.Provider>
    );
}

const useAppContext = () => useContext(ApppContext);
export default useAppContext;

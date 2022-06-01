import React,{ createContext, useContext, userReducer } from "react"; // the dependence we need

export const StateContext = createContext(); // preparing for data layer

export const StateProvider =({ reducer , initialState , children 
}) => (
    <StateContext.Provider value={userReducer(reducer,initialState)}>

        {children}

    </StateContext.Provider>
);

// Hook Which allows use to pull information from the data layer
export const useContextValue = () => useContext(StateContext);
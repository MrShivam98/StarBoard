import { createContext, useState, useEffect } from 'react';
import sampleData from "../sampleData.json"

export const MyContext = createContext([]);

export function MyContextProvider({ children }) {
    const [sharedData, setSharedData] = useState(() => {
        const stored = localStorage.getItem("dealsData");
        return stored ? JSON.parse(stored) : sampleData;
    });

    useEffect(() => {
        localStorage.setItem("dealsData", JSON.stringify(sharedData));
    }, [sharedData]);

    return (
        <MyContext.Provider value={{ sharedData, setSharedData }}>
            {children}
        </MyContext.Provider>
    );
}

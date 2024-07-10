import { createContext, useContext, useState } from "react";

export const TransactionContext = createContext();


export const useTransactionContext = () => {
    return useContext(TransactionContext);
};

export const TransactionContextProvider = ({ children }) => {
    const [userTransaction, setUserTransaction] = useState(false);

    return <TransactionContext.Provider value={{ userTransaction, setUserTransaction }}>{children}</TransactionContext.Provider>;
};

import {createContext, ReactNode, useState } from "react"

type childrenProps = {
    children:ReactNode
}

type TransactionType = {
    id:number,
    text:string,
    amount:number
}

type GlobalState={
    transactions:TransactionType[],
    deleteTransaction:(id:number)=>void,
    addTransaction:(t:TransactionType)=>void,
}

const initialState = {
    transactions: [
        {id:1, text:'Flowers', amount : -30},
        {id:2, text:'Salary', amount : +300},
        {id:3, text:'book', amount : -10},
    ]
}

export const GlobalContext = createContext<GlobalState>({
    transactions:initialState.transactions,
    deleteTransaction:()=>{},
    addTransaction:()=>{},
})


const GlobalProvider = ({children} :childrenProps) => {
 
    const [transactions, setTransactions] = useState<TransactionType[]>(initialState.transactions)

    const deleteTransaction = (id:number)=>{
        setTransactions(transactions.filter(transaction=> transaction.id!==id))
    }

    const addTransaction=(t:TransactionType)=>{
        setTransactions(prev=>({...prev,t}))
    }

    return (
    <GlobalContext.Provider value={{transactions, deleteTransaction, addTransaction}}>
        {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider
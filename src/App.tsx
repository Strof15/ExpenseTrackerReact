import Balance from "./Component/Balance"
import Header from "./Component/Header"
import TransactionList from "./Component/TransactionList"
import AddTransaction from "./Component/AddTransaction"
import IncomeExpense from "./Component/IncomeExpense"
import "./app.css"
import GlobalProvider from "./Component/GlobalContext"

const App = () => {
  return (
    <>
      <div className="container">
      <GlobalProvider>      
      <Header></Header>
      <Balance></Balance>
      <IncomeExpense></IncomeExpense>
      <TransactionList></TransactionList>
      <AddTransaction></AddTransaction>
      </GlobalProvider>

      </div>
    </>
  )
}

export default App
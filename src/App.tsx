import Balance from "./Component/Balance"
import Header from "./Component/Header"
import TransactionList from "./Component/TransactionList"
import AddTransaction from "./Component/AddTransaction"
import IncomeExpense from "./Component/IncomeExpense"
import "./app.css"

const App = () => {
  return (
    <>
      <div className="container">
      <Header></Header>
      <Balance></Balance>
      <IncomeExpense></IncomeExpense>
      <TransactionList></TransactionList>
      <AddTransaction></AddTransaction>
      </div>
    </>
  )
}

export default App
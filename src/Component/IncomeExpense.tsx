import { useContext } from "react"
import { GlobalContext } from "./GlobalContext"

const IncomeExpense = () => {

  const {transactions} = useContext(GlobalContext)
 
  const amounts = transactions.map(transaction=> (
    transaction.amount
  ))

  const income = amounts.filter(amount=>amount>0).reduce((total, amount) => (
    total+= amount
  ),0 ).toFixed(2)

  const expense = amounts.filter(amount=>amount<0).reduce((total, amount) => (
    total+= amount
  ),0 ).toFixed(2)

  return (
    <div className="incExpContainer">
            <div className="income">
                <p>Income</p>
                <p>{income}$</p>
            </div>
            <div className="expense">
                <p>Expense</p>
                <p>{expense}$</p>
            </div>
    </div>
  )
}

export default IncomeExpense
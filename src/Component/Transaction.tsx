import { useContext } from "react"
import { GlobalContext } from "./GlobalContext"

type transactionprops = {
    id:number,
    text:string,
    amount:number,
}

const Transaction = (props:transactionprops) => {

  const {deleteTransaction} = useContext(GlobalContext)

  return (
    <div>
        <li className={props.amount>0? 'plus' : 'minus'}>
          {props.text}<span>{props.amount>0? '' : '-'}${Math.abs(props.amount)}</span><button onClick={()=> deleteTransaction(props.id)} className="deleteBtn">X</button>
        </li>
    </div>
  )
}

export default Transaction
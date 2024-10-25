
const TransactionList = () => {
  return (
    <div>
        <h3>History</h3>
        <ul className="list">
            <li className="minus">
                Flowers<span>-30$</span><button>X</button>
            </li>
            <li className="plus">
                Salary<span>+300$</span><button>X</button>
            </li>
            <li className="minus">
                Book<span>-30$</span><button>X</button>
            </li>
        </ul>
    </div>
  )
}

export default TransactionList
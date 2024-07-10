import { useState, memo } from "react";
import "../Statistics/Statistics.css";
import { useEffect } from "react";
import { useTransactionContext } from '../../context/TransactionContext';
import toast from "react-hot-toast";
const Statistics = () => {

  const { userTransaction, setUserTransaction } = useTransactionContext()

  const [banks, setBanks] = useState([])
  const [totalBalance, setTotalBalance] = useState(0)
  const [loading, setLoading] = useState(true)
  const [weeklyExpenses, setWeeklyExpenses] = useState(0)

  let budgetUser = localStorage.getItem('budget-user')
  budgetUser = budgetUser.replace(/['"]+/g, '');

  const getTotalBalance = async () => {
    try {

      const res = await fetch(`http://localhost:3000/statics/totalBalance/${budgetUser}`)
      const data = await res.json()

      console.log(data);
      setTotalBalance(data)
      // console.log(totalBalance);
    } catch (err) {
      toast.error(err.error)
    }
  }
  useEffect(() => {
    getTotalBalance()
  }, [userTransaction])

  return (
    <div className="d-flex general-card" key={1}>
      <div className="cardSta">
        <h5>Total Balance :</h5>
        <h1>{totalBalance} $ </h1>

      </div>
      <div className="cardSta">
        <h5>last month Expenses</h5>
        <h1>{weeklyExpenses} $ </h1>
        <p>increased by 13% </p>
      </div>
      <div className="cardSta">
        <h5>last week Expenses</h5>
        <h1>75.99 $ </h1>
        <p>Decreased by 4% from the week before </p>
      </div>
      <button className="add-accountBtn">limit you expenses</button>
    </div>
  );
}
export default Statistics
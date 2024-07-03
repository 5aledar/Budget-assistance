import { useState } from "react";
import "../Statistics/Statistics.css";
import { useEffect } from "react";
import toast from "react-hot-toast";
export default  function Statistics() {
  const [banks, setBanks] = useState([])
  const [totalBalance, setTotalBalance] = useState()
  const [loading , setLoading] = useState(false)
const [weeklyExpenses , setWeeklyExpenses] = useState(0)
  
  let budgetUser = localStorage.getItem('budget-user')
  budgetUser = budgetUser.replace(/['"]+/g, '');
  const getData = async () => {
    setLoading(true)
    try {

      const res = await fetch(`http://localhost:3000/bank/${budgetUser}`,{
        method: "GET",
      });
      const data = await res.json();
      console.log(data);
      if (data.error) {
        toast.error(data.error)
        throw new Error(data.error)
      }
      setBanks(data)
      let accumelator = 0
      banks.map((acc) => { return accumelator += Number(acc.balance); })
      const total = accumelator
      setTotalBalance(total)
      setLoading(false)
    } catch (error) {
      toast.error(error.message)
    }

  }

  const getWeeklyExpenses = async () =>{

    const res = await fetch(`http://localhost:3000/statics/weekly/withdraw/${budgetUser}`)
    const data = await res.json()
  
    setWeeklyExpenses(data.total)
  }

  const compareWeeklyExpenses = async () =>{
    const res = await fetch(`localhost:3000/statics/lastWeek/withdraw/${budgetUser}`)
  }
  
  useEffect(() => {
    getData();
    getWeeklyExpenses()
  }, [])



  return (
    <div className="d-flex general-card" key={1}>
      <div className="cardSta">
        <h5>Total Balance :</h5>
        <h1>{ totalBalance } $ </h1>
   
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

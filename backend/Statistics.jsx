import { useState } from "react";
import "../Statistics/Statistics.css";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { Await } from "react-router-dom";
export default function Statistics() {
  const [banks , setBanks] = useState([])
  const [totalBalance , setTotalBalance] = useState(0)
  let budgetUser = localStorage.getItem('budget-user')
  const getData = async () => {
      try {
          budgetUser = budgetUser.replace(/['"]+/g, '');

          const res = await fetch(`http://localhost:3000/bank/${budgetUser}`);
          const data = await res.json();
          console.log(data);
          if (data.error) {
              toast.error(data.error)
              throw new Error(data.error);
          }
          setBanks(data)
      } catch (error) {
          toast.error(error.message);
      }

  }
  const getTotalBalance = async () =>{
      try {
        let accumelator = 0
          banks.map(( acc) => {  accumelator += Number(acc.balance) ;} )
        console.log(accumelator);
        const total = accumelator
        await setTotalBalance(total)
        //  console.log(totalBalance);
      } catch (error) {
          toast.error(error.message)
      }
  }
  useEffect(() => {
      getData()
      getTotalBalance()
  }, [])


  return (
    <div className="d-flex general-card">
        <div className="cardSta">
          <h5>Total Balance :</h5>
          <h1>{totalBalance} </h1>
          <p>increased by 13% </p>
        </div>
        <div className="cardSta">
          <h5>last month Expenses</h5>
          <h1>120.99 $ </h1>
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

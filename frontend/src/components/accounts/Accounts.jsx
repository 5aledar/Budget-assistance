import React from 'react'
import "./AccountsStyle.css"
import CardAccounts from "../../components/cardaccounts/CardAccounts"
import Statistics from '../Statistics/Statistics'
import ExpenseIcone from '../ExpenseIcone/ExpenseIcone'
import Chart from '../Chart/Chart'

const Accounts = () => {
    return (
        <div>
            <div className="container mt-5">
                <div className="">
                    <div className="">
                        <CardAccounts />
                    </div>
                    <div>
                       <Statistics/>
                    </div>
                    <div>
                       <ExpenseIcone/>
                    </div>
                    <div>
                        <Chart/>
                    </div>
                </div>
            </div>



            {/* <div className="container-amount d-flex flex-column justify-content-center align-items-center p-4">
              <div class="d-flex flex-column">
              <label htmlFor="" class="text-light mb-3" style={{fontSize:"20px"}}>Amount</label>
              <input type="text" name="" value="" 
              style={{ backgroundColor: "#423F5A", border: "none" ,outline:"none" ,borderRadius:"10px"}} class="mb-5 p-2 px-4" />
              </div>
                <button class="card-link add-deposit pt-2 pb-2 px-4">Add Deposit</button>
            </div> */}



            {/* <div className="container-add-bank d-flex flex-wrap gap-3">
            <div class="d-flex flex-column">
              <label htmlFor="" class="text-light mb-3" style={{fontSize:"20px"}}>Bank name :</label>
              <input type="text" name="" value="" 
              style={{ backgroundColor: "#423F5A", border: "none" ,outline:"none" ,borderRadius:"10px"}} class="mb-5 p-2 px-4" />
              </div>
              <div class="d-flex flex-column">
              <label htmlFor="" class="text-light mb-3" style={{fontSize:"20px"}}>Account id :</label>
              <input type="text" name="" value="" 
              style={{ backgroundColor: "#423F5A", border: "none" ,outline:"none" ,borderRadius:"10px"}} class="mb-5 p-2 px-4" />
              </div>
              <div class="d-flex flex-column">
              <label htmlFor="" class="text-light mb-3" style={{fontSize:"20px"}}>Account balance</label>
              <input type="text" name="" value="" 
              style={{ backgroundColor: "#423F5A", border: "none" ,outline:"none" ,borderRadius:"10px"}} class="mb-5 p-2 px-4" />
              </div>
                <button class="card-link add-bank pt-2 pb-2 px-4">Add bank</button>
            </div> */}
        </div>
    )
}

export default Accounts

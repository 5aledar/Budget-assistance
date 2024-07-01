import React from 'react'
import "./AccountsStyle.css"
import CardAccounts from "../../components/cardaccounts/CardAccounts"
import Statistics from '../Statistics/Statistics'
import ExpenseIcone from '../ExpenseIcone/ExpenseIcone'
import Chart from '../Chart/Chart'

const Accounts = () => {
    return (
        <div className="mt-5">
                    <div>
                     <CardAccounts />
                     </div>
                    <div>
                       <Statistics/>
                    </div>
                    <div>
                       <ExpenseIcone/>
                    </div>
                    <div class="div-chart">
                        <Chart/>
                    </div>
         </div>
    )
}

export default Accounts

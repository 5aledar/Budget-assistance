import React from 'react'
import "./CardAccountStyle.css"

const CardAccounts = (props) => {
    const Account=[
        {"bankName":"visa","accountNumber":"3456797","balance":"23500"},
        {"bankName":"visa","accountNumber":"3456797","balance":"23500"},
        {"bankName":"visa","accountNumber":"3456797","balance":"23500"},
        

    ]
    return (
        <div>
            {Account.map(acc=>
            <div class="card card-account text-light">
                <div class="card-body">
                    <div className="d-flex justify-content-between">
                        <p class="card-title card-title1 m-0">{acc.bankName}</p>
                        <h6 class="card-title card-title2 m-0">{acc.accountNumber}</h6>
                    </div>
                    <p class="card-text m-0">{acc.balance} $</p>
                    <div className="d-flex justify-content-between">
                        <button class="card-link add-deposit p-2">Add deposit</button>
                         <button class="card-link withdraw p-2">Withdraw</button>
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}

export default CardAccounts

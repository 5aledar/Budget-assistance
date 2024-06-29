import React from 'react'
import "./CardAccountStyle.css"

const CardAccounts = (props) => {
    const Account=[
        {"bankName":"visa","accountNumber":"3456797","balance":"23500"},
        {"bankName":"visa","accountNumber":"3456797","balance":"23500"},
       

    ]
    return (
        <div className=' d-inline-flex w-100 flex-wrap'>
            {Account.map(acc=>
            <div class="card card-account text-light" >
                <div class="card-body">
                    <div className="d-flex justify-content-between">
                        <p class="card-title card-title1 m-0">{acc.bankName}</p>
                        <h6 class="card-title card-title2 m-0">acc id : {acc.accountNumber}</h6>
                    </div>
                    <p class="card-text m-0">{acc.balance} $</p>
                    <div className="d-flex justify-content-between">
                        <button class="card-link add-deposit p-2">Add deposit</button>
                         <button class="card-link withdraw p-2">Withdraw</button>
                    </div>
                </div>
            </div>
            )}
             <button class="add-account " >
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M16.2576 2.4848L16.2576 29.7575" stroke="#4F4B70" stroke-width="3" stroke-linecap="round" />
                                <path d="M29.5151 16.5L2.24241 16.5" stroke="#4F4B70" stroke-width="3" stroke-linecap="round" />
                            </svg>
                        </button>
        </div>
    )
}

export default CardAccounts

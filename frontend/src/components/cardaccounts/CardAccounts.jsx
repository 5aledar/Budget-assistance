import React from 'react'
import "./CardAccountStyle.css"

const CardAccounts = (props) => {
    const Account=[
        {"bankName":"visa","accountNumber":"3456797","balance":"23500"},
        {"bankName":"visa","accountNumber":"3456797","balance":"23500"},
       

    ]
    return (
        <div className="d-flex general-card">
            {Account.map(acc=> 
            <div class="card-parent card-account text-light" >
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

export default CardAccounts

import React from 'react'
import "./AccountsStyle.css"
import CardAccounts from "../../components/cardaccounts/CardAccounts"

const Accounts = () => {
    return (
        <div>
            <div className="container">
                <div className="row d-flex">
                    <div className="col-lg-5 col-md-12 col-sm-12">
                        <CardAccounts cardtitle1={"Paypal"} cardtitle2={"acc id  : 73544539"} cardtext={"1,456.99 $"} />
                    </div>
                    <div className="col-lg-5 col-md-12 col-sm-12">
                        <CardAccounts cardtitle1={"Visa"} cardtitle2={"acc id  : 23143697"} cardtext={"341.00 $"} />
                    </div>
                    <div className="col-lg-2 col-md-12 col-sm-12">
                        <button class="add-account" >
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M16.2576 2.4848L16.2576 29.7575" stroke="#4F4B70" stroke-width="3" stroke-linecap="round" />
                                <path d="M29.5151 16.5L2.24241 16.5" stroke="#4F4B70" stroke-width="3" stroke-linecap="round" />
                            </svg></button>
                    </div>
                </div>
            </div>
            <div className="container-amount d-flex flex-column justify-content-center align-items-center p-4">
              <div class="d-flex flex-column">
              <label htmlFor="" class="text-light mb-3" style={{fontSize:"20px"}}>Amount</label>
              <input type="text" name="" value="" 
              style={{ backgroundColor: "#423F5A", border: "none" ,outline:"none" ,borderRadius:"10px"}} class="mb-5 p-2 px-4" />
              </div>
                <button class="card-link add-deposit pt-2 pb-2 px-4">Add Deposit</button>
            </div>
            <div className="container-add-bank d-flex flex-wrap gap-3">
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
            </div>
        </div>
    )
}

export default Accounts

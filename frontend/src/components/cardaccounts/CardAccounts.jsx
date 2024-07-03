import React, { useEffect, useState } from 'react';
import "./CardAccountStyle.css"
import toast from 'react-hot-toast'
import useGetUserBanks from '../../hooks/useGetUserBanks';
import { useNavigate } from 'react-router-dom';

const CardAccounts = () => {
    const [showDeposit, setShowDeposit] = useState(false);
    const [showAccount, setShowAccount] = useState(false);
    const [banks, setBanks] = useState([])
    const [showWithdraw , setShowWithdraw] = useState(false)
    const [currentBalance , setCurrentBalance] = useState(0)
    const navigate = useNavigate()
    let budgetUser = localStorage.getItem('budget-user')
    const getData = async () => {
        try {
            budgetUser = budgetUser.replace(/['"]+/g, '');

            const res = await fetch(`http://localhost:3000/bank/${budgetUser}`);
            const data = await res.json();
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
            banks.reduce((total , acc) => {total += acc})
        } catch (error) {
            toast.error(error.message)
        }
    }
    useEffect(() => {
        
        getData()
        getTotalBalance()
    }, [showAccount , showDeposit , showWithdraw])


    const handleAddSubmit = async (e) => {
        e.preventDefault()
        // if (typeof (balance) !== 'number') {
        //     toast.error('enter a number')
        //     return
        // }
        budgetUser = budgetUser.replace(/['"]+/g, '');
        const res = await fetch(`http://localhost:3000/bank/${budgetUser}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ bankName, accountNumber, balance }),
        })
        const response = await res.json
        // toast(response)
        console.log(response);
        setShowAccount(false)
    }



    const [bankName, setBankName] = useState('')
    const [accountNumber, setAccountNumber] = useState('')
    const [balance, setBalance] = useState(0)
    let [bankId, setBankId] = useState(null)
    const [amount, setAmount] = useState(0)
    // setBanks(banksAcounts)
    const Account = banks
    //  [
    //     { "bankName": "visa", "accountNumber": "3456797", "balance": "23500" },
    //     { "bankName": "visa", "accountNumber": "3456797", "balance": "23500" },


    // ]

    const add = (index) => {
        if (index === '1') {
            setShowDeposit(true);
        } else if (index === '2') {
            setShowAccount(true);
        }else if (index === '3'){
            setShowWithdraw(true)
        }
    };

    const close = (index) => {
        if (index === '1') {
            setShowDeposit(false);
        } else if (index === '2') {
            setShowAccount(false);
        } else if (index === '3'){
            setShowWithdraw(false)
        }
    };


    const handleDepositSubmit = async (e) => {
        e.preventDefault()
        const type = 'deposit'
        budgetUser = budgetUser.replace(/['"]+/g, '');
        bankId = bankId.replace(/['"]+/g, '');
        // console.log(budgetUser);
        try {
            
            const res = await fetch(`http://localhost:3000/transaction/${budgetUser}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ bankId, type, amount }),
            })
            const response = await res.json()
            console.log(response);
            setShowDeposit(false)
        } catch (error) {
            console.error(error);
        }
    }
    const handleWithdrawSubmit = async (e) => {
        e.preventDefault()
        const type = 'withdraw'
        if (currentBalance < amount)
            {
                toast.error('no balance')
                setShowWithdraw(false)
                return 
            }
        budgetUser = budgetUser.replace(/['"]+/g, '');
        bankId = bankId.replace(/['"]+/g, '');
        // console.log(budgetUser);
        try {
            
            const res = await fetch(`http://localhost:3000/transaction/${budgetUser}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ bankId, type, amount }),
            })
            const response = await res.json()
            console.log(response);
            setShowWithdraw(false)
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="d-flex flex-wrap  general-card">
            {Account && Array.isArray(Account) ? (
                Account.map(acc => (
                    <div class="card-parent card-account mb-3  text-light" key={acc._id} >
                        <div class="card-body">
                            <div className="d-flex justify-content-between">
                                <p className="card-title card-title1 m-0">{acc.bankName}</p>
                                <h6 className="card-title card-title2 m-0">acc id : {acc.accountNumber}</h6>
                            </div>
                            <p className="card-text m-0">{acc.balance} </p>
                            <div className="d-flex justify-content-between">
                                <button className="card-link add-deposit p-2" onClick={() => { add('1'); setBankId(acc._id) }}>Add deposit</button>
                                <button className="card-link withdraw p-2" onClick={() => { add('3'); setBankId(acc._id); setCurrentBalance(acc.balance) }}>Withdraw</button>
                            </div>
                        </div>
                    </div>
                )
                ))
                : (
                    <div className=''>No accounts found</div>
                )}
            {/* {Account.map(acc =>
                <div key={acc._id} class="card-parent card-account text-light" >
                    <div class="card-body">
                        <div className="d-flex justify-content-between">
                            <p class="card-title card-title1 m-0">{acc.bankName}</p>
                            <h6 class="card-title card-title2 m-0">acc id : {acc.accountNumber}</h6>
                        </div>
                        <p class="card-text m-0">{acc.balance} </p>
                        <div className="d-flex justify-content-between">
                            <button class="card-link add-deposit p-2" onClick={() => add('1')}>Add deposit</button>
                            <button class="card-link withdraw p-2">Withdraw</button>
                        </div>
                    </div>
                </div>
            )} */}
            <button class="add-account " >
                <svg onClick={() => add('2')} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M16.2576 2.4848L16.2576 29.7575" stroke="#4F4B70" stroke-width="3" stroke-linecap="round" />
                    <path d="M29.5151 16.5L2.24241 16.5" stroke="#4F4B70" stroke-width="3" stroke-linecap="round" />
                </svg>
            </button>

            {showDeposit && (
                <div className="container-amount d-flex flex-column justify-content-center align-items-center p-4">
                    <form onSubmit={handleDepositSubmit}>

                        <p className="close-deposit" onClick={() => close('1')} >❌</p>
                        <div className="d-flex flex-column">
                            <label htmlFor="" className="text-light mb-3" style={{ fontSize: "20px" }}>Amount</label>
                            <input
                                type="number"
                                name=""
                                placeholder="Enter deposit amount"
                                style={{
                                    backgroundColor: "#423F5A",
                                    border: "none",
                                    outline: "none",
                                    borderRadius: "10px",
                                }}
                                className="mb-5 p-2 px-4"
                                value={amount} onChange={(e) => setAmount(e.target.value)}
                            />
                        </div>
                        <button className="card-link add-deposit pt-2 pb-2 px-4" type='submit'>Add Deposit</button>
                    </form>
                </div>
            )}
            {showWithdraw && (
                <div className="container-amount d-flex flex-column justify-content-center align-items-center p-4">
                    <form onSubmit={handleWithdrawSubmit}>

                        <p className="close-deposit" onClick={() => close('3')} >❌</p>
                        <div className="d-flex flex-column">
                            <label htmlFor="" className="text-light mb-3" style={{ fontSize: "20px" }}>Amount</label>
                            <input
                                type="number"
                                name=""
                                placeholder="Enter deposit amount"
                                style={{
                                    backgroundColor: "#423F5A",
                                    border: "none",
                                    outline: "none",
                                    borderRadius: "10px",
                                }}
                                className="mb-5 p-2 px-4"
                                value={amount} onChange={(e) => setAmount(e.target.value)}
                            />
                        </div>
                        <button className="card-link add-deposit pt-2 pb-2 px-4" type='submit' >Withdraw</button>
                    </form>
                </div>
            )}
            {showAccount && (
                <form className='container-add-bank d-flex flex-wrap gap-3' onSubmit={handleAddSubmit}>


                    <div class="d-flex flex-column">
                        <p className="close-account" onClick={() => close('2')}>❌</p>
                        <label htmlFor="" class="text-light mb-3" style={{ fontSize: "20px" }}>Bank name :</label>
                        <input type="text" name="" required value={bankName} onChange={(e) => setBankName(e.target.value)}
                            style={{ backgroundColor: "#423F5A", border: "none", outline: "none", borderRadius: "10px" }} class="py-2 px-4" />
                    </div>
                    <div class="d-flex flex-column">
                        <label htmlFor="" class="text-light mb-3" style={{ fontSize: "20px" }}>Account id :</label>
                        <input type="text" name="" value={accountNumber} required
                            style={{ backgroundColor: "#423F5A", border: "none", outline: "none", borderRadius: "10px" }} class="py-2 px-4" onChange={(e) => setAccountNumber(e.target.value)} />
                    </div>
                    <div class="d-flex flex-column">
                        <label htmlFor="" class="text-light mb-3" style={{ fontSize: "20px" }} >Account balance</label>
                        <input type="text" name="" value={balance} required
                            style={{ backgroundColor: "#423F5A", border: "none", outline: "none", borderRadius: "10px" }} class=" py-2 px-4" onChange={(e) => setBalance(e.target.value)} />
                        <button class="card-link add-bank py-1 px-4 mt-5" type='submit'>Add bank</button>
                    </div>

                </form>
            )}
        </div>


    )
}

export default CardAccounts
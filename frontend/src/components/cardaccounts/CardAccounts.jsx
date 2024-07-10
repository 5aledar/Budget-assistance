import React, { useEffect, useState, memo } from 'react';
import "./CardAccountStyle.css"
import toast from 'react-hot-toast'
import useGetUserBanks from '../../hooks/useGetUserBanks';
import { useNavigate } from 'react-router-dom';
import { useTransactionContext } from '../../context/TransactionContext';
const CardAccounts = memo(() => {
    const { userTransaction, setUserTransaction } = useTransactionContext()
    // setUserTransaction(true)
    const [showDeposit, setShowDeposit] = useState(false);
    const [showAccount, setShowAccount] = useState(false);
    const [banks, setBanks] = useState([])
    const [showWithdraw, setShowWithdraw] = useState(false)
    const [currentBalance, setCurrentBalance] = useState(0)
    const [deleted , setDeleted] = useState(false)
    const navigate = useNavigate()
    let budgetUser = localStorage.getItem('budget-user')
    const getData = async () => {
        budgetUser = budgetUser.replace(/['"]+/g, '');
        try {
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

    useEffect(() => {
        getData()

    }, [showAccount, showDeposit, showWithdraw  , userTransaction])


    const handleAddSubmit = async (e) => {
        e.preventDefault()

        budgetUser = budgetUser.replace(/['"]+/g, '');
        const res = await fetch(`http://localhost:3000/bank/${budgetUser}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ bankName, accountNumber, balance })
        })
        console.log('l');
        const response = await res.json
        // toast(response)
        console.log(response);
        await setUserTransaction(!userTransaction)
        console.log(userTransaction);
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
        } else if (index === '3') {
            setShowWithdraw(true)
        }
    };

    const close = (index) => {
        if (index === '1') {
            setShowDeposit(false);
        } else if (index === '2') {
            setShowAccount(false);
        } else if (index === '3') {
            setShowWithdraw(false)
        }
    };


    const handleDepositSubmit = async (e) => {
        e.preventDefault()
        const type = 'deposit'
        budgetUser = budgetUser.replace(/['"]+/g, '');
        bankId = bankId.replace(/['"]+/g, '');

        try {

            const res = await fetch(`http://localhost:3000/transaction/${budgetUser}`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ bankId, type, amount }),
            })
            const response = await res.json()
            console.log(response);
            setUserTransaction(!userTransaction)
            setShowDeposit(false)
        } catch (error) {
            console.error(error);
        }
    }
    const handleWithdrawSubmit = async (e) => {
        e.preventDefault()
        const type = 'withdraw'
        if (currentBalance < amount) {
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
            await setUserTransaction(!userTransaction)
            console.log(userTransaction);
            setShowWithdraw(false)
        } catch (error) {
            console.error(error);
        }
    }


    const handleDelete = async (acc) => {
        try {
            setBankId(acc._id)
            const res = await fetch(`http://localhost:3000/bank/${bankId}`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const data = await res.json()
           
            await setUserTransaction(!userTransaction)
            toast.success('deleted successfuly')

        } catch (error) {

        }
    }


    return (
        <div className="d-flex flex-wrap  general-card">
            {Account && Array.isArray(Account) ? (
                Account.map(acc => (
                    <div className="card-parent card-account mb-3  text-light" key={acc._id} >
                        <div className="card-body">
                            <div className="d-flex justify-content-between">
                                <p className="card-title card-title1 m-0">{acc.bankName}</p>
                                <h6 className="card-title card-title2 m-0">acc id : {acc.accountNumber}</h6>
                                <button className="trash-button" onClick={() => {  handleDelete(acc) }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                        <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                    </svg>
                                </button>
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
         
            <button className="add-account " >
                <svg onClick={() => add('2')} xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M16.2576 2.4848L16.2576 29.7575" stroke="#4F4B70" strokeWidth="3" strokeLinecap="round" />
                    <path d="M29.5151 16.5L2.24241 16.5" stroke="#4F4B70" strokeWidth="3" strokeLinecap="round" />
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
                            style={{ backgroundColor: "#423F5A", border: "none", outline: "none", borderRadius: "10px" }} className="py-2 px-4" />
                    </div>
                    <div className="d-flex flex-column">
                        <label htmlFor="" class="text-light mb-3" style={{ fontSize: "20px" }}>Account id :</label>
                        <input type="text" name="" value={accountNumber} required
                            style={{ backgroundColor: "#423F5A", border: "none", outline: "none", borderRadius: "10px" }} className="py-2 px-4" onChange={(e) => setAccountNumber(e.target.value)} />
                    </div>
                    <div className="d-flex flex-column">
                        <label htmlFor="" className="text-light mb-3" style={{ fontSize: "20px" }} >Account balance</label>
                        <input type="text" name="" value={balance} required
                            style={{ backgroundColor: "#423F5A", border: "none", outline: "none", borderRadius: "10px" }} className=" py-2 px-4" onChange={(e) => setBalance(e.target.value)} />
                        <button className="card-link add-bank py-1 px-4 mt-5" type='submit'>Add bank</button>
                    </div>

                </form>
            )}
        </div>


    )
}
)
export default CardAccounts
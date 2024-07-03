import toast from "react-hot-toast";
import { useAuthContext } from '../context/AuthContext';
import { useNavigate } from "react-router-dom";

import React, { useEffect, useState } from 'react'


const useGetUserBanks = async () => {

    const budgetUser = localStorage.getItem('budget-user')
    console.log(budgetUser._id);
    let newData
    const getDate = async () => {
        try {
            const res = await fetch(`http://localhost:3000/bank/66840af7d8067aa5b6ba5612`);
            const data = await res.json();
            if (data.error) {
                toast.error(data.error)
                throw new Error(data.error);
            }
            newData = data

        } catch (error) {
            toast.error(error.message);
        }
    }
    useEffect(() => {
        getDate()

    }, [])
    const userId = 0

    const [banks, setBanks] = useState([])
    setBanks(newData);
    return banks;
}

export default useGetUserBanks

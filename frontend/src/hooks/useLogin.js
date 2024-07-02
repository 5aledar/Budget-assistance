import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from '../context/AuthContext';
import { useNavigate } from "react-router-dom";

const useLogin = () => {
	const navigate = useNavigate()
	const { setAuthUser } = useAuthContext();

	const login = async (email, password) => {
		const success = handleInputErrors(email, password);
		if (!success) return;

		try {
			console.log('fetch start');
			const res = await fetch("http://localhost:3000/auth/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, password }),
			});

			const data = await res.json();
		
			console.log(data);
			if (data.error) {
				throw new Error(data.error);
				
			}

			if (res.ok){

				localStorage.setItem("budget-user", JSON.stringify(data));
				setAuthUser(data);
				navigate('/home')
			}else{
				toast.error(data)
			}
		} catch (error) {
			toast.error(error.message);
		}
	};

	return login
};
export default useLogin;

function handleInputErrors(email, password) {
	if (!email || !password) {
		toast.error("Please fill in all fields");
		return false;
	}

	return true;
}

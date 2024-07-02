import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from '../context/AuthContext' ;

const useLogin = () => {

	const { setAuthUser } = useAuthContext();

	const login = async (email, password) => {
		const success = handleInputErrors(email, password);
		if (!success) return;
	
		try {
			const res = await fetch("http://localhost:3000/auth/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email, password }),
			});

			const data = await res.json();
			if (data.error) {
				throw new Error(data.error);
			}

			localStorage.setItem("budget-user", JSON.stringify(data));
			setAuthUser(data);
		} catch (error) {
			toast.error(error.message);
		} 
	};

	return  login 
};
export default useLogin;

function handleInputErrors(email, password) {
	if (!email || !password) {
		toast.error("Please fill in all fields");
		return false;
	}

	return true;
}

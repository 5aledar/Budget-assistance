import { useState } from "react";
import toast from "react-hot-toast";
import { useAuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
const useRegister = () => {
    const { setAuthUser } = useAuthContext();
const navigate = useNavigate()
    const register = async ({ username, email, password, confirmPassword , otp }) => {
        const success = handleInputErrors({ username, email, password, confirmPassword , otp });
        if (!success) return;
        try {
            const res = await fetch("http://localhost:3000/auth/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, email, password, otp }),
            });

            const data = await res.json();
            if (data.error) {
                throw new Error(data.error);
            }
            if (res.ok){
                navigate('/home')
            }
            localStorage.setItem("budget-user", JSON.stringify(data));
            setAuthUser(data);
        } catch (error) {
            toast.error(error.message);
        }
    };
    return register
};
export default useRegister;

function handleInputErrors({ username, email, password, confirmPassword, otp }) {
    if (!username || !email || !password || !confirmPassword || !otp) {
        toast.error("Please fill in all fields");
        return false;
    }

    if (password !== confirmPassword) {
        toast.error("Passwords do not match");
        return false;
    }

    if (password.length < 6) {
        toast.error("Password must be at least 6 characters");
        return false;
    }

    return true;
}

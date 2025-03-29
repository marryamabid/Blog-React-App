import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from '../store/authSlice';
import authService from "../appwrite/auth";
import { Logo, Button, Input } from "./index";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

function Signup() {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();

    const create = async (data) => {
        console.log(`Data from signup:`, data);
        setError("");

        try {
            const userData = await authService.createAccount(data);
            console.log(`User created:`, userData);

            if (userData) {
                const currentUser = await authService.getCurrentUser();
                if (currentUser) {
                    dispatch(authLogin({ userData: currentUser }));
                    console.log(`Dispatching user data:`, currentUser);
                    navigate("/");
                }
            }
        } catch (error) {
            console.error("Signup error:", error);
            setError(error.message);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
            <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                <div className="flex justify-center">
                    <Logo width="80px" />
                </div>
                <h2 className="text-center text-3xl font-bold mt-4 text-gray-900">
                    Create an Account
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    Already have an account?&nbsp;
                    <Link to="/login" className="text-primary font-medium hover:underline">
                        Sign In
                    </Link>
                </p>

                {error && <p className="text-red-600 mt-4 text-center">{error}</p>}

                <form onSubmit={handleSubmit(create)} className="mt-6 space-y-5">
                    <Input
                        label="Full Name"
                        placeholder="Enter your full name"
                        {...register("name", { required: true })}
                    />
                    <Input
                        label="Email"
                        placeholder="Enter your email"
                        type="email"
                        {...register("email", {
                            required: true,
                            validate: {
                                matchPattern: (value) =>
                                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                                    "Enter a valid email address",
                            },
                        })}
                    />
                    <Input
                        label="Password"
                        type="password"
                        placeholder="Enter your password"
                        {...register("password", { required: true })}
                    />

                    <Button type="submit" className="w-full py-2 rounded-lg">
                        Sign Up
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default Signup;

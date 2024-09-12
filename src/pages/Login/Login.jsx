import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PasswordInput from '../../components/Input/PasswordInput'
import { validateEmail } from '../../utils/helper'

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();
        if (!validateEmail(email)) {
            setError("Invalid email, please enter a valid email");
            return;
        }
        if (password.length < 8) {
            setError("Password should be at least 8 characters long");
            return;
        }
        
        setError(""); 
        navigate("/dashboard"); 
    }
    const canSubmit = validateEmail(email) && password.length >= 8;

    return (
        <>
            <div className="flex items-center justify-center mt-28">
                <div className="w-96 border rounded bg-white px-7 py-10">
                    <form onSubmit={handleLogin}>
                        <h4 className="text-2xl mb-7">Login</h4>
                        <input
                            type="text"
                            placeholder="Email"
                            className="input-box"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <PasswordInput
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <button
                            type="submit"
                            className={`btn-primary ${!canSubmit && 'opacity-50 cursor-not-allowed'}`}
                            disabled={!canSubmit}
                        >
                            Login
                        </button>
                        <p className="text-sm text-center mt-4">
                            Not registered yet?{' '}
                            <Link to="/signUp" className="font-medium text-primary underline">
                                Create an Account
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Login;


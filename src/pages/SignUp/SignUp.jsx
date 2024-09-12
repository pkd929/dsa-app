import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { validateEmail } from '../../utils/helper';

const SignUp = () => {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleSignup = async (e) => {
        e.preventDefault();
        if (!name) {
            setError("Please enter your name");
            return;
        }
        if (!validateEmail(email)) {
            setError("Please enter a valid email address");
            return;
        }
        if (password.length < 8) {
            setError("Password should be at least 8 characters long");
            return;
        }

        setError(""); 
        navigate("/dashboard"); 
    }
    const canSubmit = name && validateEmail(email) && password.length >= 8;

    return (
        <>
            <div className="flex items-center justify-center mt-28">
                <div className="w-96 border rounded bg-white px-7 py-10">
                    <form onSubmit={handleSignup}>
                        <h4 className="text-2xl mb-7">SIGN UP</h4>
                        <input 
                            type="text" 
                            placeholder="Name" 
                            className="input-box"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <input 
                            type="text" 
                            placeholder="Email" 
                            className="input-box"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input 
                            type="password" 
                            placeholder="Password" 
                            className="input-box"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {error && <p className="text-red-500 text-sm">{error}</p>}
                        <button 
                            type="submit" 
                            className={`btn-primary ${!canSubmit && 'opacity-50 cursor-not-allowed'}`} 
                            disabled={!canSubmit}
                        >
                            Create Account
                        </button>

                        <p className="text-sm text-center mt-4">
                            Already have an account?{" "}
                            <Link to="/" className="font-medium text-primary underline">
                               Login
                            </Link>
                        </p>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignUp;

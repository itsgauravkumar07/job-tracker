import { useState } from "react";
import { loginUser } from "../services/authService";
import { useNavigate, Link } from "react-router-dom";

export default function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [authError, setAuthError] = useState("");

    const navigate = useNavigate();

    async function handleLogin(e){
        e.preventDefault();

        const err = {};

        if(email.trim() === ""){
            err.email = "Email required"
        }
        if(password.trim() === ""){
            err.password = "Password required"
        }
        setErrors(err);

        if(Object.keys(err) > 0) return;

    try {
      setLoading(true);
      setAuthError("");
      await loginUser(email, password);
      navigate("/dashboard");
    } catch (error) {
      setAuthError("Invalid email or password");
    } finally {
      setLoading(false);
    }
  }

    return(
        <div className="flex justify-center items-center h-screen">
            <div className=" flex flex-col border border-gray-300 p-8 rounded-2xl w-2xs">
                <h2 className="text-lg font-bold">Sign in with email</h2>
                <form onSubmit={handleLogin} className="flex flex-col mt-5 gap-2.5">

                    <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="bg-gray-200 rounded-md p-1 pl-4 hover:bg-gray-300"/>

                    {errors.email && <p className="text-red-300">{errors.email}</p>}


                    <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="bg-gray-200 rounded-md p-1 pl-4 hover:bg-gray-300"/>

                    {errors.password && <p className="text-red-300">{errors.password}</p>}

                    {authError && <p className="text-red-500">{authError}</p>}

                    <button disabled={loading} className="bg-black rounded-md p-1 text-white hover:bg-white hover:text-black hover:border hover:border-gray-300 hover:font-bold" >Log in</button>

                    <p className="text-sm">
                        Don’t have an account?
                        <Link to="/signup" className="text-blue-600 ml-1">
                            Sign up
                        </Link>
                    </p>
                </form>
            </div>
            
        </div>
    )
}
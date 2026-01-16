import { useState } from "react"

export default function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    function handleLogin(e){
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

        console.log("email: ", email);
        console.log("password" , password);

        setEmail("");
        setPassword("");
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
                    <button className="bg-black rounded-md p-1 text-white hover:bg-white hover:text-black hover:border hover:border-gray-300 hover:font-bold">Log in</button>
                </form>
            </div>
            
        </div>
    )
}
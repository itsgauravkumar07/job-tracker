import { useState } from "react";
import { logoutUser } from "../services/authService";
import AddJob from './AddJob';

export default function Dashboard(){

    const[jobApplication, setJobApplication] = useState([]);

    function handleAddJobApplication(){

    }

    return(
        <div className="mx-5 my-5">
            <nav className="flex justify-between px-5 py-2 items-center">
                <div>
                    <h1 className="text-4xl">Dashboard</h1>
                    <p className="text-md mt-2">Plan, prioritize your Job application</p>
                </div>
                <div>
                    <button className="px-6 py-2 bg-green-400 mr-4 rounded-2xl hover:bg-green-300 hover:shadow font-medium">Add Job</button>
                    <button onClick={async () => await logoutUser()} className="px-6 py-2 bg-green-400 mr-4 rounded-2xl hover:bg-green-300 hover:shadow font-medium">Logout</button>
                </div>
            </nav>

            <div><AddJob handleAddJobApplication={handleAddJobApplication}/></div>
            
            
        </div>
    )
}
import { useEffect, useState } from "react";
import { Navigate, useNavigate, Link } from "react-router-dom";

export default function AddJob( { setJobApplication }){

    const [companyName, setCompanyName] = useState('');
    const [jobRole, setJobRole] = useState('');
    const [appStatus, setAppStatus] = useState('none');
    const [appDate, setAppDate] = useState('');
    const [note, setNote] = useState('');
    const [jobLink, setJobLink] = useState('');
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    function handleForm(e){
        e.preventDefault();

        let newError = {};
        if(!companyName){
            newError.companyName = "Company name is required";
        }

        if(!jobRole){
            newError.jobRole = "Job role is required";
        }

        if(appStatus === "none"){
            newError.appStatus = "Application status Required";
        }

        if(!appDate){
            newError.appDate = "Application date is required";
        }


        setErrors(newError);

        if(Object.keys(newError).length > 0) return;

       const updateJob = {
                id: crypto.randomUUID(),
                companyName, 
                jobRole, 
                appStatus, 
                appDate, 
                note, 
                jobLink
            };

        setJobApplication(prev => [...prev, updateJob]);
        
        navigate("/dashboard");
        
        setCompanyName("");
        setJobRole("");
        setAppStatus("none");
        setAppDate("");
        setNote("")
        setJobLink("");
    }

    return(
        <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 flex-col">
            <h1 className="text-center text-2xl font-semibold mb-6 text-gray-800">
                Add Job Application
            </h1>
            <div className="w-full max-w-md bg-white shadow-lg p-6 space-y-3 rounded-lg">
                    <form 
                        onSubmit={handleForm}
                        className="space-y-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Company Name
                        </label>
                        <input 
                            type="text" 
                            placeholder="Google"
                            value={companyName}
                            onChange={e => setCompanyName(e.target.value)} 
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.companyName && 
                            <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>
                        }

                        <label className="block text-sm font-medium text-gray-700 mb-1">Job Role</label>
                        <input 
                            type="text" 
                            placeholder="Frontend developer" 
                            value={jobRole}
                            onChange={e => setJobRole(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.jobRole && <p className="text-red-500 text-sm mt-1">{errors.jobRole}</p>}


                        <label className="block text-sm font-medium text-gray-700 mb-1">Application Status</label>
                        <select 
                            value={appStatus}
                            onChange={e => setAppStatus(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"   
                        >
                            <option value="none">none</option>
                            <option value="Applied">Applied</option>
                            <option value="Interview">Interview</option>
                            <option value="Reject">Reject</option>
                            <option value="Offer">Offer</option>
                        </select>
                        {errors.appStatus && <p className="text-red-500 text-sm mt-1">{errors.appStatus}</p>}


                        <label className="block text-sm font-medium text-gray-700 mb-1">Application Date</label>
                        <input 
                            type="Date" 
                            value={appDate}
                            onChange={e => setAppDate(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.appDate && <p className="text-red-500 text-sm mt-1">{errors.appDate}</p>}

                        <label className="block text-sm font-medium text-gray-700 mb-1">Notes</label>
                        <input 
                            type="text" 
                            placeholder="Enter Notes" 
                            value={note}
                            onChange={e => setNote(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <label className="block text-sm font-medium text-gray-700 mb-1">Job Link</label>
                        <input 
                            type="url" 
                            placeholder="https://www.google.com/" 
                            value={jobLink}
                            onChange={e=>setJobLink(e.target.value)}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />

                        <button className="py-2 rounded-md font-medium bg-blue-600 text-white w-full hover:bg-blue-700 transition duration-200">Job Application</button>
                        
                    </form>

                    <button className="py-2 rounded-md font-medium bg-white text-gray-700 w-full border border-gray-300 hover:bg-gray-100 transition duration-200"
                            onClick={() => navigate("/dashboard")}>
                            Cancel
                    </button>
            </div>
            
        </div>
    )
}
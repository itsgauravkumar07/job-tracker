import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function AddJob( {setJobApplication }){

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

        setJobApplication(prev => [
            ...prev, 
            {
                companyName, 
                jobRole, 
                appStatus, 
                appDate, 
                note, 
                jobLink
            }
        ]);

        
        navigate("/dashboard");
        
        setCompanyName("");
        setJobRole("");
        setAppStatus("none");
        setAppDate("");
        setNote("")
        setJobLink("");
    }

    return(
        <div className="flex flex-col justify-center">
            <h1 className="text-center">Add Job Application</h1>

            <div>
                <form 
                    onSubmit={handleForm}
                    className="flex flex-col bg-gray-300 w-fit"
                >
                    <label>Company Name</label>
                    <input 
                        type="text" 
                        placeholder="Enter Company name"
                        value={companyName}
                        onChange={e => setCompanyName(e.target.value)} 
                    />
                    {errors.companyName && <p className="text-red-500">{errors.companyName}</p>}

                    <label>Job Role</label>
                    <input 
                        type="text" 
                        placeholder="Enter Company name" 
                        value={jobRole}
                        onChange={e => setJobRole(e.target.value)}
                    />
                    {errors.jobRole && <p className="text-red-500">{errors.jobRole}</p>}


                    <label>Application Status</label>
                    <select 
                        value={appStatus}
                        onChange={e => setAppStatus(e.target.value)}    
                    >
                        <option value="none">none</option>
                        <option value="Applied">Applied</option>
                        <option value="Interview">Interview</option>
                        <option value="Reject">Reject</option>
                        <option value="Offer">Offer</option>
                    </select>
                    {errors.appStatus && <p className="text-red-500">{errors.appStatus}</p>}


                    <label>Application Date</label>
                    <input 
                        type="Date" 
                        value={appDate}
                        onChange={e => setAppDate(e.target.value)}
                    />
                    {errors.appDate && <p className="text-red-500">{errors.appDate}</p>}

                    <label>Notes</label>
                    <input 
                        type="text" 
                        placeholder="Enter Company name" 
                        value={note}
                        onChange={e => setNote(e.target.value)}
                    />

                    <label>Job Link</label>
                    <input 
                        type="url" 
                        placeholder="Enter Company name" 
                        value={jobLink}
                        onChange={e=>setJobLink(e.target.value)}
                    />

                    <button>Add Job Application</button>
                </form>
            </div>
        </div>
    )
}
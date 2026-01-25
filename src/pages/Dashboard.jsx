import { useState } from "react";
import { logoutUser } from "../services/authService";
import { Link, useNavigate } from "react-router-dom";

export default function Dashboard({ jobApplication, handleDelete, setJobToEdit }){

    const navigate = useNavigate();

    return(
        <div className="mx-5 my-5">
            <nav className="flex justify-between px-5 py-2 items-center">
                <div>
                    <h1 className="text-4xl">Dashboard</h1>
                    <p className="text-md mt-2">Plan, prioritize your Job application</p>
                </div>
                <div>
                    <Link to="/addjob">
                        <button 
                            className="px-6 py-2 bg-green-400 mr-4 rounded-2xl hover:bg-green-300 hover:shadow font-medium"
                        >Add Job</button>
                    </Link>
                    
                    <button onClick={async () => await logoutUser()} className="px-6 py-2 bg-green-400 mr-4 rounded-2xl hover:bg-green-300 hover:shadow font-medium">Logout</button>
                </div>
            </nav>

          <div className="grid gap-4 mt-6">
                {jobApplication.map((app, index) => (
                    <div
                    key={index}
                    className="bg-white rounded-lg shadow-md p-5 border border-gray-200"
                    >
                    {/* Header */}
                    <div className="flex justify-between items-start">
                        <div>
                        <h2 className="text-lg font-semibold text-gray-800">
                            {app.companyName}
                        </h2>
                        <p className="text-sm text-gray-500">
                            {app.jobRole}
                        </p>
                        </div>

                        {/* Status Badge */}
                        <span
                        className={`text-xs font-semibold px-3 py-1 rounded-full
                            ${
                            app.appStatus === "Applied" && "bg-blue-100 text-blue-700"
                            }
                            ${
                            app.appStatus === "Interview" && "bg-yellow-100 text-yellow-700"
                            }
                            ${
                            app.appStatus === "Offer" && "bg-green-100 text-green-700"
                            }
                            ${
                            app.appStatus === "Reject" && "bg-red-100 text-red-700"
                            }
                        `}
                        >
                        {app.appStatus}
                        </span>
                    </div>

                    {/* Details */}
                    <div className="mt-3 text-sm text-gray-600 space-y-1">
                        <p>
                        <span className="font-medium">Applied on:</span> {app.appDate}
                        </p>

                        {app.note && (
                        <p>
                            <span className="font-medium">Notes:</span> {app.note}
                        </p>
                        )}

                        {app.jobLink && (
                        <a
                            href={app.jobLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline block"
                        >
                            View Job Posting
                        </a>
                        )}
                    </div>

                    {/* Actions */}
                    <div className="mt-4 flex justify-end">
                        
                        <button
                        onClick={() => navigate(`/edit/${app.id}`)}
                        className="px-4 py-2 mr-3 text-sm bg-yellow-400 text-white rounded-md hover:bg-blue-700 transition"
                        >
                        Edit
                        </button>
                        <button
                        onClick={() => handleDelete(index)}
                        className="px-4 py-2 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                        >
                        Delete
                        </button>
                    </div>
                </div>
                ))}
            </div> 
        </div>
    )
}
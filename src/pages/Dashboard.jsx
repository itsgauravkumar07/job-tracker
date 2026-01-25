import { useState } from "react";
import { logoutUser } from "../services/authService";
import { Link, useNavigate } from "react-router-dom";

export default function Dashboard({ jobApplication, handleDelete }) {
  const navigate = useNavigate();

  const [statusFilter, setStatusFilter] = useState("All");

 const filteredJobs = 
    statusFilter === "All" 
    ? jobApplication 
    : jobApplication.filter(job => job.appStatus === statusFilter); 

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 bg-white border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold text-gray-800">
              Dashboard
            </h1>
            <p className="hidden sm:block text-sm text-gray-500">
              Plan and track your job applications
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link to="/addjob">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-md font-medium hover:bg-blue-700 transition">
                + Add Job
              </button>
            </Link>

            <button
              onClick={logoutUser}
              className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-100 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </nav>

    <div className="pb-5 flex" >
            <h1>Filter : </h1>
            <select onChange={e => setStatusFilter(e.target.value)}>
                <option value="All">All</option>
                <option value="Applied">Applied</option>
                <option value="Interview">Interview</option>
                <option value="Reject">Reject</option>
                <option value="Offer">Offer</option>
            </select>
    </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Empty State */}
        {filteredJobs.length === 0 && (
          <div className="bg-white border rounded-lg p-10 text-center text-gray-500">
            <p className="text-lg font-medium">No job applications yet</p>
            <p className="text-sm mt-2">
              Click “Add Job” to start tracking your applications
            </p>
          </div>
        )}

        {/* Job Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredJobs.map(app => (
            <div
              key={app.id}
              className="bg-white rounded-lg border shadow-sm p-5 flex flex-col justify-between"
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

                <span
                  className={`text-xs font-semibold px-3 py-1 rounded-full
                    ${
                      app.appStatus === "Applied" &&
                      "bg-blue-100 text-blue-700"
                    }
                    ${
                      app.appStatus === "Interview" &&
                      "bg-yellow-100 text-yellow-700"
                    }
                    ${
                      app.appStatus === "Offer" &&
                      "bg-green-100 text-green-700"
                    }
                    ${
                      app.appStatus === "Reject" &&
                      "bg-red-100 text-red-700"
                    }
                  `}
                >
                  {app.appStatus}
                </span>
              </div>

              {/* Details */}
              <div className="mt-4 text-sm text-gray-600 space-y-1">
                <p>
                  <span className="font-medium">Applied on:</span>{" "}
                  {app.appDate}
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
                    className="text-blue-600 hover:underline inline-block mt-1"
                  >
                    View Job Posting
                  </a>
                )}
              </div>

              {/* Actions */}
              <div className="mt-5 flex justify-end gap-2">
                <button
                  onClick={() => navigate(`/edit/${app.id}`)}
                  className="px-3 py-1.5 text-sm bg-yellow-400 text-white rounded-md hover:bg-yellow-500 transition"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(app.id)}
                  className="px-3 py-1.5 text-sm bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

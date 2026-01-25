import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function EditJob({ jobApplication, setJobApplication }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const job = jobApplication.find(j => j.id === id);

  const [companyName, setCompanyName] = useState("");
  const [jobRole, setJobRole] = useState("");
  const [appStatus, setAppStatus] = useState("none");
  const [appDate, setAppDate] = useState("");
  const [note, setNote] = useState("");
  const [jobLink, setJobLink] = useState("");

  useEffect(() => {
    if (!job) return;

    setCompanyName(job.companyName);
    setJobRole(job.jobRole);
    setAppStatus(job.appStatus);
    setAppDate(job.appDate);
    setNote(job.note);
    setJobLink(job.jobLink);
  }, [job]);

  const handleUpdate = e => {
    e.preventDefault();

    setJobApplication(prev =>
      prev.map(j =>
        j.id === id
          ? {
              ...j,
              companyName,
              jobRole,
              appStatus,
              appDate,
              note,
              jobLink,
            }
          : j
      )
    );

    navigate("/dashboard");
  };

  if (!job) {
    return <p className="text-center mt-10">Job not found</p>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleUpdate}
        className="bg-white p-6 rounded-lg shadow w-full max-w-md space-y-4"
      >
        <h1 className="text-xl font-semibold">Edit Job</h1>

        <input
          value={companyName}
          onChange={e => setCompanyName(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        />

        <input
          value={jobRole}
          onChange={e => setJobRole(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        />

        <select
          value={appStatus}
          onChange={e => setAppStatus(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        >
          <option value="none">Select</option>
          <option>Applied</option>
          <option>Interview</option>
          <option>Reject</option>
          <option>Offer</option>
        </select>

        <input
          type="date"
          value={appDate}
          onChange={e => setAppDate(e.target.value)}
          className="w-full border px-3 py-2 rounded"
        />

        <button className="w-full bg-blue-600 text-white py-2 rounded">
          Update Job
        </button>
      </form>

    </div>
  );
}

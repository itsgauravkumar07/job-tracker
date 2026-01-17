import { useState } from "react";
import { signupUser } from "../services/authService";
import { useNavigate, Link } from "react-router-dom";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [authError, setAuthError] = useState("");

  const navigate = useNavigate();

  async function handleSignup(e) {
    e.preventDefault();

    const err = {};
    if (!name.trim()) err.name = "Name required";
    if (!email.trim()) err.email = "Email required";
    if (!password.trim()) err.password = "Password required";

    setErrors(err);
    if (Object.keys(err).length > 0) return;

    try {
      setLoading(true);
      setAuthError("");
      await signupUser(email, password);
      navigate("/dashboard");
    } catch (error) {
      setAuthError("Account creation failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSignup}
        className="border p-8 rounded-xl w-72 flex flex-col gap-3"
      >
        <h2 className="text-lg font-bold">Sign Up</h2>

        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border p-2 rounded"
        />
        {errors.name && <p className="text-red-500">{errors.name}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 rounded"
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
        />
        {errors.password && <p className="text-red-500">{errors.password}</p>}

        {authError && <p className="text-red-500">{authError}</p>}

        <button
          disabled={loading}
          className="bg-black text-white p-2 rounded"
        >
          {loading ? "Creating account..." : "Sign Up"}
        </button>

        <p className="text-sm">
          Already have an account?
          <Link to="/" className="text-blue-600 ml-1">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

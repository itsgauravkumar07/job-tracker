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
        <div className="min-h-screen bg-background flex items-center justify-center px-4">
  <div className="w-full max-w-md bg-surface border border-border rounded-2xl p-8">

    {/* Header */}
    <div className="text-center mb-8">
      <h2 className="text-2xl font-bold text-text">
        Welcome back
      </h2>
      <p className="mt-2 text-sm text-muted">
        Sign in to continue to JobTrack
      </p>
    </div>

    {/* Form */}
    <form onSubmit={handleLogin} className="space-y-5">

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-muted mb-2">
          Email address
        </label>
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {/* {errors.email && (
          <p className="mt-1 text-sm text-red-400">
            {errors.email}
          </p>
        )} */}
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-medium text-muted mb-2">
          Password
        </label>
        <input
          type="password"
          placeholder="••••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary"
        />
        {/* {errors.password && (
          <p className="mt-1 text-sm text-red-400">
            {errors.password}
          </p>
        )} */}
      </div>

      {/* Auth error */}
      {authError && (
        <p className="text-sm text-red-400">
          {authError}
        </p>
      )}

      {/* CTA */}
      <button
        disabled={loading}
        className="w-full py-2.5 rounded-lg bg-primary text-black font-semibold hover:opacity-90 transition disabled:opacity-60"
      >
        {loading ? "Signing in..." : "Sign in"}
      </button>
    </form>

    {/* Footer */}
    <p className="mt-6 text-center text-sm text-muted">
      Don’t have an account?{" "}
      <Link to="/signup" className="text-primary hover:underline">
        Sign up
      </Link>
    </p>
  </div>
</div>

    )
}
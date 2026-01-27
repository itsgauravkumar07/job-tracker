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
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
  <form
    onSubmit={handleSignup}
    className="w-full max-w-md bg-surface border border-border rounded-2xl p-8 flex flex-col gap-5"
  >
    {/* Header */}
    <div className="text-center mb-2">
      <h2 className="text-2xl font-bold text-text">
        Create your account
      </h2>
      <p className="mt-1 text-sm text-muted">
        Start tracking your job applications
      </p>
    </div>

    {/* Name */}
    <div>
      <label className="block text-sm font-medium text-muted mb-2">
        Full name
      </label>
      <input
        type="text"
        placeholder="John Doe"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-4 py-2.5 rounded-lg bg-background border border-border text-text placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-primary"
      />
      {errors.name && (
        <p className="mt-1 text-sm text-red-400">
          {errors.name}
        </p>
      )}
    </div>

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
      {errors.email && (
        <p className="mt-1 text-sm text-red-400">
          {errors.email}
        </p>
      )}
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
      {errors.password && (
        <p className="mt-1 text-sm text-red-400">
          {errors.password}
        </p>
      )}
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
      className="w-full py-2.5 rounded-lg bg-primary text-white font-semibold hover:opacity-90 transition disabled:opacity-60"
    >
      {loading ? "Creating account..." : "Create account"}
    </button>

    {/* Footer */}
    <p className="text-center text-sm text-muted">
      Already have an account?{" "}
      <Link
        to="/login"
        className="text-primary hover:underline"
      >
        Sign in
      </Link>
    </p>
  </form>
</div>

  );
}

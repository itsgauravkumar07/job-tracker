import Dashboard from "../assets/dashboard.webp";
import {
  LayoutGrid,
  AlertCircle,
  FileText,
  TrendingDown,
  CheckCircle,
  LayoutDashboard,
  Filter,
  StickyNote,
  ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";

export default function MarketingLanding() {
  return (
    <div className="bg-background text-text min-h-screen">

      {/* ================= NAVBAR ================= */}
      <nav className="px-4 sm:px-6 lg:px-10 py-5 flex justify-between items-center bg-surface">
        <h1 className="text-xl sm:text-2xl font-bold">JobTrack</h1>

        <Link to={"/signup"}>
            <button className="px-4 py-2.5 rounded-lg bg-primary font-medium text-sm hover:opacity-90 transition">
            Get Started
            </button>
        </Link>
        
      </nav>

      {/* ================= HERO ================= */}
      <section className="px-4 sm:px-6 lg:px-10 pt-16 pb-28">
        <div className="max-w-7xl mx-auto grid gap-12 lg:grid-cols-2 items-center">

          {/* Left */}
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
              Track all your{" "} <br />
              <span className="text-primary">Job Application</span>{" "}
              in one place
            </h1>

            <p className="text-base sm:text-lg text-muted max-w-xl leading-relaxed">
              Organize applications, track progress, and stay focused
              during your job search.
            </p>

            <Link to={"/signup"}>
                <button className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary font-semibold hover:opacity-90 transition">
                Start Tracking Jobs
                <ArrowRight className="w-4 h-4" />
                </button>
            </Link>
            
          </div>

          {/* Right */}
          <div className="flex justify-center lg:justify-end">
            <img
              src={Dashboard}
              alt="Dashboard preview"
              className="w-full max-w-xl rounded-2xl border border-border shadow-xl"
            />
          </div>

        </div>
      </section>

      {/* ================= PROBLEM ================= */}
      <section className="bg-surface py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Job searching feels chaotic
            </h2>
            <p className="mt-4 text-muted text-lg">
              Managing applications shouldn’t be this hard.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

            <div className="bg-background border border-border rounded-2xl p-6">
              <LayoutGrid className="w-6 h-6 text-primary mb-4" />
              <h3 className="font-semibold mb-1">Scattered tools</h3>
              <p className="text-sm text-muted">
                Applications live across spreadsheets and notes.
              </p>
            </div>

            <div className="bg-background border border-border rounded-2xl p-6">
              <AlertCircle className="w-6 h-6 text-primary mb-4" />
              <h3 className="font-semibold mb-1">Lost status</h3>
              <p className="text-sm text-muted">
                Hard to remember which roles are active.
              </p>
            </div>

            <div className="bg-background border border-border rounded-2xl p-6">
              <FileText className="w-6 h-6 text-primary mb-4" />
              <h3 className="font-semibold mb-1">Missing details</h3>
              <p className="text-sm text-muted">
                Job links and notes get lost.
              </p>
            </div>

            <div className="bg-background border border-border rounded-2xl p-6">
              <TrendingDown className="w-6 h-6 text-primary mb-4" />
              <h3 className="font-semibold mb-1">No clarity</h3>
              <p className="text-sm text-muted">
                No clear view of your progress.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SOLUTION ================= */}
      <section className="py-28 bg-background">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">

    {/* Heading */}
    <div className="text-center max-w-2xl mx-auto mb-20">
      <h2 className="text-3xl sm:text-4xl font-bold">
        One dashboard. Total clarity.
      </h2>
      <p className="mt-4 text-muted text-lg">
        Everything you need to manage your job search, without the clutter.
      </p>
    </div>

    {/* Solution cards */}
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

      {/* Card 1 */}
      <div className="bg-surface border border-border rounded-2xl p-8">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
          <CheckCircle className="w-6 h-6 text-primary" />
        </div>
        <h3 className="font-semibold text-lg mb-2">
          Centralized tracking
        </h3>
        <p className="text-sm text-muted leading-relaxed">
          All your job applications organized in a single, clean dashboard.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-surface border border-border rounded-2xl p-8">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
          <LayoutDashboard className="w-6 h-6 text-primary" />
        </div>
        <h3 className="font-semibold text-lg mb-2">
          Clear workflow
        </h3>
        <p className="text-sm text-muted leading-relaxed">
          Instantly see which roles are applied, active, or completed.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-surface border border-border rounded-2xl p-8">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
          <Filter className="w-6 h-6 text-primary" />
        </div>
        <h3 className="font-semibold text-lg mb-2">
          Smart filtering
        </h3>
        <p className="text-sm text-muted leading-relaxed">
          Filter applications by status to focus on what matters most.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-surface border border-border rounded-2xl p-8">
        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
          <StickyNote className="w-6 h-6 text-primary" />
        </div>
        <h3 className="font-semibold text-lg mb-2">
          Notes & links
        </h3>
        <p className="text-sm text-muted leading-relaxed">
          Keep job links, descriptions, and personal notes together.
        </p>
      </div>

    </div>
  </div>
</section>


      {/* ================= HOW IT WORKS ================= */}
      <section className="bg-surface py-28">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 text-center">

    {/* Heading */}
    <h2 className="text-3xl sm:text-4xl font-bold mb-6">
      How it works
    </h2>
    <p className="text-muted text-lg max-w-xl mx-auto mb-20">
      Get started in minutes with a simple, focused workflow.
    </p>

    {/* Steps */}
    <div className="grid gap-8 sm:grid-cols-3">

      {/* Step 1 */}
      <div className="bg-background border border-border rounded-2xl p-8">
        <div className="w-12 h-12 rounded-full bg-primary font-bold flex items-center justify-center mx-auto mb-6">
          01
        </div>
        <h3 className="font-semibold text-lg mb-2">
          Add job applications
        </h3>
        <p className="text-sm text-muted">
          Save company details, job role, links, and notes in one place.
        </p>
      </div>

      {/* Step 2 */}
      <div className="bg-background border border-border rounded-2xl p-8">
        <div className="w-12 h-12 rounded-full bg-primary font-bold flex items-center justify-center mx-auto mb-6">
          02
        </div>
        <h3 className="font-semibold text-lg mb-2">
          Track status & progress
        </h3>
        <p className="text-sm text-muted">
          Update application status and instantly see where you stand.
        </p>
      </div>

      {/* Step 3 */}
      <div className="bg-background border border-border rounded-2xl p-8">
        <div className="w-12 h-12 rounded-full bg-primary font-bold flex items-center justify-center mx-auto mb-6">
          03
        </div>
        <h3 className="font-semibold text-lg mb-2">
          Stay organized & focused
        </h3>
        <p className="text-sm text-muted">
          Filter applications and focus on what matters most right now.
        </p>
      </div>

    </div>
  </div>
</section>


      {/* ================= FINAL CTA ================= */}
      <section className="py-28 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Take control of your job search
        </h2>
        <p className="mt-4 text-muted text-lg">
          Track smarter. Apply with confidence.
        </p>

        <Link to={"/signup"}>
            <button className="mt-8 px-8 py-3 rounded-lg bg-primary font-semibold hover:opacity-90 transition">
            Get Started for Free
            </button>
        </Link>
        
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-border py-10 text-center text-sm text-muted">
        © {new Date().getFullYear()} JobTrack. All rights reserved.
      </footer>

    </div>
  );
}

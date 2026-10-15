import { useState } from "react";
import { Link } from "react-router-dom";
import ServiceNavbar from "../Components/layout/ServiceNavbar";
import Footer from "../Components/section/Footer";
import AuthLayout, { Field, SubmitButton } from "../Components/section/auth/AuthLayout";

export default function SignInPage() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <ServiceNavbar />
      <AuthLayout
        title="Sign in"
        subtitle="Welcome back. Enter your details to continue."
        footerText="Don't have an account?"
        footerLink="Sign up"
        footerTo="/signup"
      >
        <form onSubmit={handleSubmit} className="space-y-5">
          <Field id="email" name="email" type="email" label="Email" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
          <Field id="password" name="password" type="password" label="Password" placeholder="Enter your password" value={form.password} onChange={handleChange} required />

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
              <input type="checkbox" className="h-4 w-4 rounded border-slate-300 accent-indigo-500" />
              Remember me
            </label>
            <Link to="/forgot-password" className="font-medium text-indigo-500 hover:text-indigo-600">
              Forgot password?
            </Link>
          </div>

          <SubmitButton>Sign in</SubmitButton>
        </form>
      </AuthLayout>
      <Footer />
    </>
  );
}
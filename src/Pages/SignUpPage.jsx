import { useState } from "react";
import ServiceNavbar from "../Components/layout/ServiceNavbar";
import Footer from "../Components/section/Footer";
import AuthLayout, { Field, SubmitButton } from "../Components/section/auth/AuthLayout";

export default function SignUpPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirm) {
      setError("Passwords don't match.");
      return;
    }
    setError("");
  };

  return (
    <>
      <ServiceNavbar />
      <AuthLayout
        title="Sign up"
        subtitle="Create your account in a minute."
        footerText="Already have an account?"
        footerLink="Sign in"
        footerTo="/signin"
      >
        <form onSubmit={handleSubmit} className="space-y-5">
          <Field id="name" name="name" type="text" label="Full name" placeholder="Your name" value={form.name} onChange={handleChange} required />
          <Field id="email" name="email" type="email" label="Email" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
          <Field id="password" name="password" type="password" label="Password" placeholder="At least 8 characters" minLength={8} value={form.password} onChange={handleChange} required />
          <Field id="confirm" name="confirm" type="password" label="Confirm password" placeholder="Repeat your password" value={form.confirm} onChange={handleChange} required />

          {error && <p className="text-sm text-red-500">{error}</p>}

          <label className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-300">
            <input type="checkbox" className="mt-0.5 h-4 w-4 rounded border-slate-300 accent-indigo-500" required />
            I agree to the Terms of Service and Privacy Policy.
          </label>

          <SubmitButton>Create account</SubmitButton>
        </form>
      </AuthLayout>
      <Footer />
    </>
  );
}
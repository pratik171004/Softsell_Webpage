import { useState } from 'react';

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', company: '', license: '', message: '' });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let errs = {};
    if (!form.name) errs.name = 'Name is required.';
    if (!form.email) errs.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Invalid email.';
    if (!form.license) errs.license = 'Please select a license type.';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) setErrors(errs);
    else {
      setErrors({});
      alert('Form submitted successfully!');
    }
  };

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <section className="py-20 bg-slate-900 text-white text-center">
      <h2 className="text-3xl font-bold mb-10">Contact Us</h2>
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 max-w-lg mx-auto text-left text-slate-900">
        <div className="mb-4">
          <label className="block mb-1 font-medium">Name</label>
          <input name="name" value={form.name} onChange={handleChange} className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Email</label>
          <input name="email" value={form.email} onChange={handleChange} className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Company</label>
          <input name="company" value={form.company} onChange={handleChange} className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">License Type</label>
          <select name="license" value={form.license} onChange={handleChange} className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="">-- Select --</option>
            <option>Software A</option>
            <option>Software B</option>
            <option>Software C</option>
          </select>
          {errors.license && <p className="text-red-500 text-sm">{errors.license}</p>}
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-medium">Message</label>
          <textarea name="message" value={form.message} onChange={handleChange} className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" rows="4"></textarea>
        </div>
        <button type="submit" className="bg-blue-700 text-white font-semibold py-2 px-6 rounded hover:bg-blue-600 transition">
          Send Message
        </button>
      </form>
    </section>
  );
}

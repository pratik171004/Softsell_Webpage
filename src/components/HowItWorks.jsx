import { Upload, DollarSign, CheckCircle } from 'lucide-react';

export default function HowItWorks() {
  const steps = [
    { icon: <Upload size={40} />, title: 'Upload License', desc: 'Submit your unused software licenses.' },
    { icon: <DollarSign size={40} />, title: 'Get Valuation', desc: 'Receive a fair market price instantly.' },
    { icon: <CheckCircle size={40} />, title: 'Get Paid', desc: 'We pay you fast and securely.' },
  ];

  return (
    <section className="py-20 bg-slate-100 px-4 text-center">
      <h2 className="text-3xl font-bold mb-10 text-slate-900">How It Works</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {steps.map((step, idx) => (
          <div key={idx} className="bg-white shadow-lg rounded-xl p-6 hover:-translate-y-2 hover:shadow-xl transform transition">
            <div className="flex justify-center text-blue-700 mb-4">{step.icon}</div>
            <h3 className="font-bold text-lg text-slate-800 mb-2">{step.title}</h3>
            <p className="text-slate-600">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

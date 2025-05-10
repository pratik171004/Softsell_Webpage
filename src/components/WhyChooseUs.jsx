import { ShieldCheck, Award, ThumbsUp, Clock } from 'lucide-react';

export default function WhyChooseUs() {
  const features = [
    { icon: <ShieldCheck size={32} />, title: 'Secure Process', desc: 'We prioritize your data and transaction security.' },
    { icon: <Award size={32} />, title: 'Best Value', desc: 'Get the highest payout in the market.' },
    { icon: <ThumbsUp size={32} />, title: 'Trusted by 500+ Clients', desc: 'Our customers love us!' },
    { icon: <Clock size={32} />, title: 'Fast Turnaround', desc: 'Get paid in as little as 24 hours.' },
  ];

  return (
    <section className="py-20 bg-white px-4 text-center">
      <h2 className="text-3xl font-bold mb-10 text-slate-900">Why Choose Us</h2>
      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((feat, idx) => (
          <div key={idx} className="bg-slate-100 shadow rounded-xl p-6 hover:shadow-lg hover:-translate-y-1 transform transition">
            <div className="flex justify-center text-yellow-400 mb-3">{feat.icon}</div>
            <h3 className="font-bold text-lg text-slate-800 mb-2">{feat.title}</h3>
            <p className="text-slate-600">{feat.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

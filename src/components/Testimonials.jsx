export default function Testimonials() {
  const reviews = [
    { name: 'Jane Smith', role: 'IT Manager', company: 'TechCorp', review: 'The process was smooth and hassle-free. Got paid within 2 days!' },
    { name: 'John Doe', role: 'Procurement Lead', company: 'Innovate Ltd.', review: 'Highly recommended! Excellent customer service and fair prices.' },
  ];

  return (
    <section className="py-20 bg-slate-100 px-4 text-center">
      <h2 className="text-3xl font-bold mb-10 text-slate-900">What Our Clients Say</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {reviews.map((rev, idx) => (
          <div key={idx} className="bg-white shadow rounded-lg p-6 text-left hover:shadow-xl hover:-translate-y-1 transform transition">
            <p className="italic text-slate-700">"{rev.review}"</p>
            <div className="mt-4">
              <p className="font-semibold text-slate-800">{rev.name}</p>
              <p className="text-sm text-slate-500">{rev.role}, {rev.company}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

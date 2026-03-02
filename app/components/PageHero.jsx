export default function PageHero({ title, subtitle }) {
  return (
    <section className="bg-gray-50 border-b">
      <div className="max-w-7xl mx-auto px-6 py-24 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900">
          {title}
        </h1>
        <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
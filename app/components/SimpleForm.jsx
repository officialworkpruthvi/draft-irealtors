"use client";

export default function SimpleForm({ fields, buttonText }) {
  return (
    <form className="mt-12 max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-sm border space-y-6">
      {fields.map((field) => (
        <div key={field.name}>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {field.label}
          </label>

          {field.type === "textarea" ? (
            <textarea
              rows="4"
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:border-green-600 outline-none"
              placeholder={field.placeholder}
            />
          ) : (
            <input
              type={field.type}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:border-green-600 outline-none"
              placeholder={field.placeholder}
            />
          )}
        </div>
      ))}

      <button
        type="submit"
        className="w-full bg-green-600 text-white py-3 rounded-xl font-semibold hover:bg-green-700 transition"
      >
        {buttonText}
      </button>
    </form>
  );
}
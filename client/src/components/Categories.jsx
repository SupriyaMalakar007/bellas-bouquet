function Categories() {
  const categories = [
    "🎂 Birthday",
    "❤️ Anniversary",
    "💍 Proposal",
    "🎉 Congratulations",
    "👶 Baby Shower",
    "🎓 Graduation",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-pink-600 mb-10">
          Shop by Occasion
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-pink-100 hover:bg-pink-200 rounded-2xl p-8 text-center font-semibold text-lg cursor-pointer transition"
            >
              {category}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Categories;
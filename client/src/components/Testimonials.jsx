function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "Priya Sharma",
      review:
        "The bouquet was beautiful and delivered on time. Highly recommended!",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      id: 2,
      name: "Tanmay Paul",
      review:
        "Excellent quality and amazing customization. My girlfriend loved it!",
      rating: "⭐⭐⭐⭐⭐",
    },
    {
      id: 3,
      name: "Sneha Roy",
      review:
        "Very creative bouquets and great customer service. Will order again!",
      rating: "⭐⭐⭐⭐⭐",
    },
  ];

  return (
    <section className="bg-pink-50 py-16">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-pink-600 mb-4">
          What Our Customers Say 💖
        </h2>

        <p className="text-center text-gray-600 mb-10">
          Every smile makes our work worthwhile.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition"
            >
              <h3 className="text-xl font-bold text-pink-600">
                {review.name}
              </h3>

              <p className="mt-3 text-gray-700">
                "{review.review}"
              </p>

              <p className="mt-4 text-xl">
                {review.rating}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;
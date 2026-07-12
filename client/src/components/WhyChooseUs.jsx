import {
  FaGift,
  FaHeart,
  FaShippingFast,
  FaLeaf,
} from "react-icons/fa";

function WhyChooseUs() {
  const features = [
    {
      icon: <FaGift size={35} />,
      title: "Custom Bouquets",
      desc: "Made specially for your loved ones.",
    },
    {
      icon: <FaHeart size={35} />,
      title: "Handmade",
      desc: "Every bouquet is crafted with care.",
    },
    {
      icon: <FaShippingFast size={35} />,
      title: "Fast Delivery",
      desc: "Quick and reliable delivery.",
    },
    {
      icon: <FaLeaf size={35} />,
      title: "Premium Quality",
      desc: "High-quality materials and finishing.",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl text-center font-bold text-pink-600 mb-12">
          Why Choose Bella's Bouquet?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-pink-50 rounded-3xl p-8 shadow hover:shadow-xl transition text-center"
            >
              <div className="text-pink-600 flex justify-center mb-4">
                {item.icon}
              </div>

              <h3 className="font-bold text-xl mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
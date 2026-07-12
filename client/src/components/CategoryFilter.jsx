function CategoryFilter({ products = [], category, setCategory }) {
  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 my-6">
      {categories.map((item) => (
        <button
          key={item}
          onClick={() => setCategory(item)}
          className={`px-5 py-2 rounded-full transition ${
            category === item
              ? "bg-pink-600 text-white"
              : "bg-pink-100 hover:bg-pink-200"
          }`}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
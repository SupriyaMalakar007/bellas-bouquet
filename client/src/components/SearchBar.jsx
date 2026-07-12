function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="🔍 Search bouquets..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full md:w-96 p-3 rounded-xl border border-pink-300 focus:outline-none focus:ring-2 focus:ring-pink-500"
    />
  );
}

export default SearchBar;
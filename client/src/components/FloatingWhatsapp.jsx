import { FaWhatsapp } from "react-icons/fa";

function FloatingWhatsapp() {
  return (
    <a
      href="https://wa.me/916289253711"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-xl hover:scale-110 transition"
    >
      <FaWhatsapp size={35} />
    </a>
  );
}

export default FloatingWhatsapp;
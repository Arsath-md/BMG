import { FaWhatsapp } from "react-icons/fa";

function FloatingWA() {
  return (
    <a
      href="https://wa.me/919597262001"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-7 right-7 z-[200] flex h-[58px] w-[58px] items-center justify-center rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] text-[30px] text-white shadow-lg animate-[waPulse_2.5s_ease-in-out_infinite]"
    >
      <FaWhatsapp />
    </a>
  );
}

export default FloatingWA;
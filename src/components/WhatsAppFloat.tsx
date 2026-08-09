import { WhatsappLogo } from "@phosphor-icons/react/dist/ssr";
import { WHATSAPP_LINK } from "@/lib/site";

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex items-center gap-3 rounded-full bg-ink p-3.5 text-paper shadow-[0_18px_50px_-16px_rgba(25,27,30,0.6)] transition-all duration-300 hover:bg-accent active:scale-[0.97] sm:bottom-7 sm:right-7"
    >
      <WhatsappLogo size={22} weight="fill" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-semibold opacity-0 transition-all duration-300 group-hover:max-w-[10rem] group-hover:opacity-100">
        Chat with us
      </span>
    </a>
  );
}

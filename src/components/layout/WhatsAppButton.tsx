import { MessageCircle } from "lucide-react";

export function WhatsAppButton() {
  return (
    <a 
      href="https://wa.me/[WHATSAPP_NUMBER]" 
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-[#0A0A0B] p-4 rounded-full shadow-lg hover:scale-110 transition-transform flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 fill-current" />
    </a>
  );
}

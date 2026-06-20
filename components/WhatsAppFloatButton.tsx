import { buildWhatsAppLink } from "@/lib/constants";

export default function WhatsAppFloatButton() {
  return (
    <a
      href={buildWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-110"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7">
        <path d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.85.5 3.58 1.38 5.07L2 22l5.12-1.35A9.94 9.94 0 0 0 12.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10Zm0 18.18c-1.6 0-3.1-.43-4.4-1.18l-.31-.18-3.04.8.81-2.96-.2-.31a8.17 8.17 0 0 1-1.27-4.35c0-4.52 3.68-8.18 8.41-8.18 4.52 0 8.18 3.68 8.18 8.18s-3.66 8.18-8.18 8.18Zm4.49-6.13c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.16.25-.64.81-.78.97-.15.16-.29.18-.54.06-1.47-.73-2.44-1.31-3.4-2.96-.26-.44.26-.41.74-1.36.08-.16.04-.31-.04-.43-.08-.12-.56-1.35-.77-1.84-.2-.49-.41-.43-.56-.43-.15-.01-.31-.01-.48-.01-.16 0-.43.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.01 2.56c.12.16 1.7 2.6 4.12 3.54 2.04.78 2.45.65 2.89.6.43-.04 1.47-.6 1.68-1.18.2-.58.2-1.07.14-1.18-.06-.12-.23-.18-.48-.31Z" />
      </svg>
    </a>
  );
}

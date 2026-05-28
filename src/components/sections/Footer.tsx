import Image from "next/image";
import Link from "next/link";
import { MapPin, MessageCircle } from "lucide-react";
import { InstagramIcon } from "@/components/ui/InstagramIcon";
import {
  INSTAGRAM,
  INSTAGRAM_HANDLE,
  LOGO,
  WHATSAPP_MAIN,
} from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-rose-light/80 bg-cream px-5 py-14 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-8 text-center md:flex-row md:justify-between md:text-left">
        <div className="flex flex-col items-center gap-3 md:items-start">
          <Link href="/" className="flex items-center">
            <Image
              src={LOGO}
              alt="Doce Manifesto — logo com borboleta"
              width={220}
              height={220}
              unoptimized
              className="h-24 w-auto object-contain sm:h-28"
            />
          </Link>
          <p className="flex items-center gap-1.5 text-sm text-chocolate/65">
            <MapPin className="h-4 w-4 text-rose-burnt" />
            Muriaé, MG
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm">
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-chocolate/75 transition-colors hover:text-rose-burnt md:justify-start"
          >
            <InstagramIcon className="h-4 w-4" />
            {INSTAGRAM_HANDLE}
          </a>
          <a
            href={WHATSAPP_MAIN}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 text-chocolate/75 transition-colors hover:text-rose-burnt md:justify-start"
          >
            <MessageCircle className="h-4 w-4" />
            (32) 98819-1595
          </a>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-7xl border-t border-rose-light/60 pt-8 text-center">
        <p className="text-xs tracking-wide text-chocolate/50">
          © {year} Doce Manifesto. Todos os direitos reservados. Feito com amor e chocolate.
        </p>
      </div>
    </footer>
  );
}

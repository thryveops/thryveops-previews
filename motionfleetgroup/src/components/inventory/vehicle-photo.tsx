import Image from "next/image";
import { CarIcon } from "@/components/icons";

/**
 * Vehicle photo with a branded placeholder when no image is available
 * (every v1 sample vehicle, until real photos/feed arrive).
 */
export function VehiclePhoto({
  src,
  alt,
  className = "",
  sizes,
  priority,
}: {
  src?: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes ?? "(max-width: 768px) 100vw, 33vw"}
        priority={priority}
        className={`object-cover ${className}`}
      />
    );
  }
  return (
    <div
      className={`flex h-full w-full flex-col items-center justify-center bg-gradient-to-br from-[#ececea] to-[#dedcd8] ${className}`}
      aria-label={`${alt} — photo coming soon`}
    >
      <CarIcon className="h-12 w-12 text-gray-500/50" />
      <span className="mt-2 font-display text-xs font-semibold uppercase tracking-[0.18em] text-gray-500/70">
        Photo coming soon
      </span>
    </div>
  );
}

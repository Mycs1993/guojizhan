"use client";

import { useMemo, useState } from "react";
import {
  Factory,
  Shield,
  Zap,
  Award,
  Users,
  CheckCircle,
  LucideIcon,
} from "lucide-react";

interface FacilityImageProps {
  src: string;
  alt: string;
  icon: "Factory" | "Shield" | "Zap" | "Award" | "Users" | "CheckCircle";
  iconColor: string;
  gradientFrom: string;
  gradientTo: string;
}

export function FacilityImage({
  src,
  alt,
  icon,
  iconColor,
  gradientFrom,
  gradientTo,
}: FacilityImageProps) {
  const [imageError, setImageError] = useState(false);

  const IconComponent: LucideIcon = useMemo(() => {
    const map: Record<string, LucideIcon> = {
      Factory,
      Shield,
      Zap,
      Award,
      Users,
      CheckCircle,
    };
    return map[icon] ?? Factory;
  }, [icon]);

  return (
    <div
      className={`aspect-video bg-gradient-to-br ${gradientFrom} ${gradientTo} flex items-center justify-center relative overflow-hidden`}
    >
      {!imageError ? (
        <img
          src={src}
          alt={alt}
          className="absolute inset-0 w-full h-full object-cover"
          onError={() => setImageError(true)}
        />
      ) : (
        <IconComponent className={iconColor} size={48} />
      )}
    </div>
  );
}


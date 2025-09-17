import React, { useEffect, useState } from "react";
import Image, { ImageProps } from "next/image";
import { StaticImageData } from "next/image";

interface DuotoneImageProps extends Omit<ImageProps, "src"> {
  src: string | StaticImageData;
  lightColor?: string;
  darkColor?: string;
  contrastFactor?: number; // Added contrast control
  sharpnessFactor?: number; // Added sharpness control
}

const DuotoneImage: React.FC<DuotoneImageProps> = ({
  src,
  width,
  height,
  className = "",
  alt = "",
  lightColor = "#E0FFFF",
  darkColor = "#004D4D",
  contrastFactor = 1.2, // Default contrast enhancement
  ...props
}) => {
  const [processedImageUrl, setProcessedImageUrl] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = document.createElement("img");

    img.crossOrigin = "anonymous";
    img.onload = () => {
      // Limit canvas size for better performance
      const maxSize = 400;
      const scale = Math.min(maxSize / img.width, maxSize / img.height, 1);
      canvas.width = img.width * scale;
      canvas.height = img.height * scale;

      if (ctx) {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;

        const light = hexToRgb(lightColor);
        const dark = hexToRgb(darkColor);

        if (light && dark) {
          // Simplified processing for better performance
          for (let i = 0; i < data.length; i += 4) {
            // Calculate brightness
            let brightness =
              (data[i] * 0.299 + data[i + 1] * 0.587 + data[i + 2] * 0.114) /
              255;

            // Apply contrast enhancement
            brightness = (brightness - 0.5) * contrastFactor + 0.5;
            brightness = Math.max(0, Math.min(1, brightness));

            // Apply duotone colors
            data[i] = Math.round(lerp(dark.r, light.r, brightness));
            data[i + 1] = Math.round(lerp(dark.g, light.g, brightness));
            data[i + 2] = Math.round(lerp(dark.b, light.b, brightness));
          }
        }

        ctx.putImageData(imageData, 0, 0);
        setProcessedImageUrl(canvas.toDataURL("image/jpeg", 0.8));
        setIsLoading(false);
      }
    };

    const imgSrc = typeof src === "string" ? src : src.src;
    img.src = imgSrc;

    return () => {
      if (processedImageUrl) {
        URL.revokeObjectURL(processedImageUrl);
      }
    };
  }, [src, lightColor, darkColor, contrastFactor, processedImageUrl]);

  const hexToRgb = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };

  const lerp = (start: number, end: number, amount: number): number => {
    return start * (1 - amount) + end * amount;
  };

  if (isLoading) {
    return (
      <div
        className={`${className} flex animate-pulse items-center justify-center bg-muted`}
        style={{ width: width, height: height }}
      >
        <span className="text-sm text-muted-foreground">Loading...</span>
      </div>
    );
  }

  if (!processedImageUrl) {
    return null;
  }

  return (
    <Image
      {...props}
      src={processedImageUrl}
      width={width}
      height={height}
      className={className}
      alt={alt}
      unoptimized
    />
  );
};

export default DuotoneImage;

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

export default function AnimatedLogo() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="h-full w-full"
      >
        <Image
          src="/logo-dark.png"
          alt="Gaber Soltan Logo"
          width={80}
          height={80}
          className="h-full w-full object-contain"
          priority
        />
      </motion.div>
    </AnimatePresence>
  );
}

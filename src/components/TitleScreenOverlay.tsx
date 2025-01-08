import { motion } from "framer-motion";
import { useState } from "react";

interface TitleScreenOverlayProps {
  onPlay?: () => void;
}

export default function TitleScreenOverlay(props: TitleScreenOverlayProps) {
  const [logoClicks, setLogoClicks] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute z-[100] flex h-full w-full select-none items-center justify-center bg-gradient-to-b from-black via-black/5 to-black backdrop-blur-md"
    >
      <motion.div
        initial={{ x: -window.innerWidth }}
        animate={{ x: 0 }}
        transition={{ type: "spring", damping: 15, delay: 0.3 }}
        className="relative flex w-full flex-col gap-10 overflow-hidden bg-black/50 py-8 outline outline-2 outline-white/5"
      >
        <div className="flex flex-col items-center justify-center gap-2">
          <h1 className="text-4xl font-bold uppercase tracking-wider text-zinc-100">
            Troika
          </h1>
        </div>

        <div className="flex items-center justify-center gap-4">
          <motion.button
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            onClick={() => props?.onPlay?.()}
            transition={{ type: "spring", delay: 1.1, damping: 12 }}
            className="rounded-lg bg-black px-6 py-1.5 font-semibold uppercase tracking-wide text-white outline outline-1 outline-white/10 transition-colors duration-300 hover:text-zinc-400"
          >
            Spēlēt
          </motion.button>
          <motion.a
            href="https://l.yatko.dev/zh-rules"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline"
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", delay: 1.2, damping: 12 }}
          >
            Noteikumi
          </motion.a>
        </div>
      </motion.div>
    </motion.div>
  );
}

import { useSelector } from "@xstate/react";
import { AnimatePresence, motion } from "framer-motion";
import { useContext, useEffect, useState } from "react";
import Deck from "./Deck";
import { GlobalStateContext } from "./providers/GlobalStateProvider";
import HumanOffHand from "./HumanOffHand";
import Pile from "./Pile";
import ShownHand from "./ShownHand";
import Switcher from "./Switcher";
import {
  isChoosingFaceUpCardsStor,
  isGameOverStor,
  isPlayingStor,
} from "../state/selectors";
import SortButton from "./SortButton";
import ResultOverlay from "./ResultOverlay";
import TitleScreenOverlay from "./TitleScreenOverlay";

export default function App() {
  const { zhitheadService } = useContext(GlobalStateContext);
  const isPlaying = useSelector(zhitheadService, isPlayingStor);
  const isChoosingFaceUpCards = useSelector(
    zhitheadService,
    isChoosingFaceUpCardsStor
  );
  const isGameOver = useSelector(zhitheadService, isGameOverStor);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  useEffect(() => {
    const onResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const [hasStarted, setHasStarted] = useState(false);

  return (
    <main
      className="relative grid grid-rows-3 overflow-hidden bg-gradient-to-b from-purple-500 via-pink-500 to-red-500 text-white"
      style={{ height: windowHeight }}
    >
      <AnimatePresence>
        {isGameOver && <ResultOverlay />}
        {!hasStarted && (
          <TitleScreenOverlay
            onPlay={() => setHasStarted(true)}
            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50"
          />
        )}
      </AnimatePresence>

      {/* Bot Section */}
      <div className="relative flex items-center justify-center">
        {(isPlaying || isGameOver) && (
          <>
            <ShownHand player="bot" />
            <AnimatePresence>
              {isPlaying && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute top-2 z-10 mx-auto w-full"
                >
                  <Switcher player="bot" />
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </div>

      {/* Central Section */}
      <div className="relative flex items-center justify-center">
        {isChoosingFaceUpCards ? (
          <motion.div
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            className="m-auto p-4 bg-white bg-opacity-20 rounded-2xl shadow-lg"
          >
            <HumanOffHand />
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0.4 }}
            animate={{ opacity: 1 }}
            className="flex h-full items-center justify-center gap-12"
          >
            <Deck />
            <Pile />
          </motion.div>
        )}
      </div>

      {/* Human Section */}
      <div className="relative pt-4">
        <AnimatePresence>
          {isPlaying && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute -left-6 bottom-2 z-10 mx-auto flex w-full items-center justify-center gap-4"
            >
              <SortButton />
              <Switcher player="human" />
            </motion.div>
          )}
        </AnimatePresence>
        <ShownHand player="human" />
      </div>
    </main>
  );
}

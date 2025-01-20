import { motion } from "framer-motion";

type RulesOverlayProps = {
    onClose: () => void; // Define the type for the onClose prop
};

export default function RulesOverlay({ onClose }: RulesOverlayProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-75"
        >
            <div className="relative w-3/4 max-w-2xl p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-4">Game Rules</h2>
                <p className="mb-4">
                    {/* Add your game rules text here */}
                    1. Each player starts with a deck of cards.
                    <br />
                    2. Players take turns playing cards to the pile.
                    <br />
                    3. Special cards have unique effects.
                    <br />
                    4. The first player to run out of cards wins.
                    <br />
                    {/* Add more rules as needed */}
                </p>
                <button
                    onClick={onClose}
                    className="mt-4 w-full px-4 py-2 text-white bg-red-600 rounded hover:bg-red-500"
                >
                    Close
                </button>
            </div>
        </motion.div>
    );
}

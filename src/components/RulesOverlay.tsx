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
            <div className="relative w-3/4 max-w-2xl p-8 bg-white rounded-lg shadow-lg text-black">
                <h2 className="text-3xl font-bold text-center mb-4">Noteikumi</h2>
                <h2 className="text-xl font-bold text-center mb-4">Spēles gaita: </h2>
                <p className="mb-4 ">
                    <b>1.</b>Sākums: Katram spēlētājam tiek izdalītas trīs kārtis rokā, trīs atklātas kārtis un trīs noslēptas kārtis.
                    <br />
                    <b>2.</b> Gājiens: Spēlētājs izspēlē vienu kārti no rokas uz izspēles kaudzi. Pēc izspēles viņš papildina roku no kavas, lai tajā vienmēr būtu trīs kārtis, līdz kava ir tukša.
                    <br />
                    <b>3.</b> Kārtis bez rokas: Kad kava ir tukša un rokas kārtis izspēlētas, spēlētājs izmanto atklātās kārtis. Pēc to izspēles tiek izmantotas noslēptās kārtis, kuras drīkst atklāt tikai izspēles brīdī.
                    <br />
                    <b>4.</b> The first player to run out of cards wins.
                    <br />
                </p>
                <h2 className="text-xl font-bold text-center mb-4">Īpašās kārtis: </h2>
                <p className="mb-4 ">
                    <b>6:</b> Atjauno izspēles kaudzi; uz tās var likt jebkuru kārti.
                    <br />
                    <b>10:</b> "Norok" visu izspēles kaudzi; spēlētājs, kurš uzliek 10, iegūst papildus gājienu.
                    <br />
                    <b>Četras vienādas kārtis pēc kārtas:</b> Ja četri spēlētāji pēc kārtas uzliek vienādas vērtības kārtis, izspēles kaudze tiek "norakta", un ceturtais spēlētājs iegūst papildus gājienu.
                    <br />
                </p>
                <h2 className="text-xl font-bold text-center mb-4">Mērķis: </h2>
                <p className="mb-4 ">
                    Pirmais spēlētājs, kurš atbrīvojas no visām savām kārtīm, uzvar spēli.
                    <br />
                </p>
                <button
                    onClick={onClose}
                    className="mt-4 w-full px-4 py-2 text-white bg-red-600 rounded hover:bg-red-500"
                >
                    Aizvērt
                </button>
            </div>
        </motion.div>
    );
}

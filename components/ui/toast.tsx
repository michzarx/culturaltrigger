import { motion, AnimatePresence } from 'framer-motion';

interface ToastProps {
  show: boolean;
  message: string;
}

export function Toast({ show, message }: ToastProps) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-4 left-1/2 transform -translate-x-1/2 
                   bg-white/90 backdrop-blur px-6 py-3 rounded-xl shadow-lg 
                   text-gray-800 z-50"
        >
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import { motion } from 'framer-motion';
import { slideInLeft } from '../utils/animations';
export function ContactItem({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <motion.li className="flex items-center space-x-4" variants={slideInLeft}>
      <div className="text-red-500">{icon}</div>
      <p className="text-lg text-white">{text}</p>
    </motion.li>
  );
}

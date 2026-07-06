import { motion } from "framer-motion";

// Fades + rises a section into view once, the first time it enters the viewport.
function Reveal({ as, className, children, ...props }) {
  const Component = as || motion.div;
  return (
    <Component
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Reveal;

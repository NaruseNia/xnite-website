import { motion } from "framer-motion"

export const Reveal = ({ children, className }: React.PropsWithChildren<{ className?: string }>) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 25 },
        visible: { opacity: 1, y: 0 }
      }}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, delay: 0.25, ease: "easeInOut"}}
      className={ className }
    >
      {children}
    </motion.div>
  )
}

import { motion, useAnimation, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

export const Reveal = ({ children, className, slideAnimation }: React.PropsWithChildren<{ className?: string, slideAnimation?: boolean }>) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const fadeControl = useAnimation();
  const slideControl = useAnimation();

  useEffect(() => {
    if (isInView) {
      fadeControl.start("visible");
      slideControl.start("visible");
    }
  }, [isInView]);

  return (
    <div ref={ref} className={className} style={{ position: "relative", overflow: slideAnimation ? "hidden" : "visible" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 25 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate={fadeControl}
        transition={{ duration: 0.5, delay: 0.25 }}
        style={{ boxSizing: "content-box" }}
      >
        {children}
      </motion.div>
      {slideAnimation ?
        <motion.div
          variants={{
            hidden: { left: 0 },
            visible: { left: "100%" }
          }}
          initial="hidden"
          animate={slideControl}
          transition={{ duration: 0.5, ease: "easeIn" }}
          style={{
            position: "absolute",
            top: 4,
            bottom: 4,
            left: 0,
            right: 0,
            background: "var(--color-white)",
            zIndex: 20
          }}
        >
        </motion.div>
      : <></>
      }

    </div>
  )
}

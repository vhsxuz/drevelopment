import { animate, motion } from "framer-motion";

const stairAnimation = {
  initial: {
    top: "0%"
  },
  animate: {
    top: "100%"
  },
  exit: {
    top: ["100%", "0%"]
  }
}

const reverseIndex = (index) => {
  const totalSteps = 6
  return totalSteps - index - 1;
}

const Stairs = () => {
  return (
    <>
      { [...Array(4)].map((_, index) => {
        return (
          <motion.div 
            key={index}
            variants={stairAnimation}
            initial="intial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.6,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1
            }}
            className="h-full w-full bg-animation relative"
          />
        )
      })}
    </>
  )
}

export default Stairs
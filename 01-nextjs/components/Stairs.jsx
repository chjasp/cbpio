import { motion } from "framer-motion"

// variants
const stairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"]
    }
}

// calculate the reverse index for the staggred delay
const reverseIndex = (index) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
}

const Stairs = () => {
  return (
    <>
    {/* render 6 motion divs, each representing a step of the stairs */}
    {[...Array(6)].map((_, index) => {
            <motion.div key={index} variants={stairAnimation} />
        })}
    </>
  )
}

export default Stairs
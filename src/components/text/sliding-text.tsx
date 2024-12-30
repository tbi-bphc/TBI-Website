import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SlidingText {
    classes?: string,
    text?: string,
    stage?: number,
    type: string,
}

const SlidingText = ({ classes, text, stage, type }: SlidingText) => {

    if (type == "slide up" && text && stage) {
        return (
            <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 * stage, ease: 'easeInOut' }}
                className={classes}
            >
                {text}
            </motion.div>
        );
    }
    if(type == "typewriter" && text && stage && classes){
        return (
            <motion.div
                style={{
                    overflow: 'hidden',
                    whiteSpace: 'nowrap'
                }}
                initial={{width:0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 2 * stage, ease: 'easeInOut' }}
                className={cn(classes,"pb-2")}
            >
                {text}
            </motion.div>
        );
    }
    // here classes refers to color
    if (type == "underline" && classes) {
        return (
            <>
                <motion.div
                    initial={{ width: 0 }} // Start with no width
                    animate={{ width: "100%" }} // Animate to full width
                    transition={{
                        duration: 1, // Duration of the animation
                        ease: "easeInOut", // Smooth animation curve
                    }}
                    className={`h-1 mt-2 rounded-full bg-${classes}`}
                    style={{ borderRadius: "999px", height: "4px" }}
                />
            </>
        )
    }
    return (
        <>
            {text}
        </>
    )
};

export default SlidingText;
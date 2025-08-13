import { useState, useEffect } from "react";

interface Props {
    targetValue: number,
}

const CountUpAnimation = ({targetValue}:Props) => {
    const [count, setCount] = useState(0);
    const duration = 2000; // 4 seconds

    useEffect(() => {
        let startValue = 0;
        const interval = Math.floor(
            duration / (targetValue - 0));

        const counter = setInterval(() => {
            startValue += 1;
            setCount(startValue);
            if (startValue >= targetValue) {
                clearInterval(counter);
            }
        }, interval);

        return () => {
            clearInterval(counter);
        };
    }, [targetValue, 0]);

    return (
        <div className="text-white">
            <span>{count}</span>
        </div>
    );
};

export default CountUpAnimation;
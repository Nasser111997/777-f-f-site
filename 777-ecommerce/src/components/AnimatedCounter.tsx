import React, { useState, useEffect } from 'react';

interface AnimatedCounterProps {
  endValue: number;
  duration?: number; // Duration in milliseconds
  prefix?: string;
  suffix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  endValue,
  duration = 2000,
  prefix = '',
  suffix = '',
}) => {
  const [count, setCount] = useState(0);
  const step = (endValue / duration) * 10; // Calculate step based on duration

  useEffect(() => {
    let startTime: number | null = null;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = currentTime - startTime;
      const currentCount = Math.min(endValue, Math.floor(progress * step));

      setCount(currentCount);

      if (progress < duration) {
        requestAnimationFrame(animate);
      } else {
        setCount(endValue); // Ensure it ends exactly on endValue
      }
    };

    requestAnimationFrame(animate);

    return () => {
      // Cleanup function if needed
    };
  }, [endValue, duration, step]); // Re-run animation if endValue or duration changes

  return (
    <span>{prefix}{count.toLocaleString()}{suffix}</span>
  );
};

export default AnimatedCounter;
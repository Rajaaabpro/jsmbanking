"use client";
import CountUp from "react-CountUp";
const AnimatedCounter = ({ amount }: { amount: number }) => {
  return (
    <><div className="w-full"></div><div>
          <CountUp
              decimals={2}
              decimal=","
              prefix="$"
              end={amount} />
      </div></>
  );
};

export default AnimatedCounter;

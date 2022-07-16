import { useEffect, useRef } from "react";
export default function useRandomInterval(callback, minDelay, maxDelay) {
  const interval = useRef(null);

  const stop = () => (interval.current = null);

  function tick(now) {
    if (!interval.current) return;

    if (now - interval.current.lastInvoke > interval.current.targetTime) {
      interval.current.lastInvoke = now;
      interval.current.targetTime = randomNum(minDelay, maxDelay);

      interval.current.callback(stop);
    }

    requestAnimationFrame(tick);
  }

  useEffect(() => {
    if (!callback || typeof callback !== "function")
      throw new Error("random interval callback is not function");
    interval.current = {
      callback: callback,
      targetTime: randomNum(minDelay, maxDelay),
      lastInvoke: performance.now(),
    };

    requestAnimationFrame(tick);

    return stop;
  }, []);

  return { stop };
}

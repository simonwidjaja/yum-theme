// Taken from https://gist.github.com/DominicTobias/c8579667e8a8bd7817c1b4d5b274eb4c
// Slightly modified by simonwidjaja :
//   + preventing "window is undefined" problem
//   + removed disconnect (now also works in dev environment)
/*
// USAGE
export default function Navigation(props) {
  const resizeObserver = useResizeObserver();
  return (
    <Component>
      <div ref={resizeObserver.ref} className="fixed-nav">
        {resizeObserver.width} {resizeObserver.height}
      </div>
  </Component>
  )
}
*/

import { useRef, useCallback, useEffect, useState } from 'react';
import { ResizeObserver as ResizeObserverPolyfill } from '@juggle/resize-observer';


export default function useResizeObserver() {
  // Removed by simonwidjaja (preventing "window is undefined" problem)
  // const ResizeObserver = window.ResizeObserver || ResizeObserverPolyfill;
  const [size, setSize] = useState({ width: 0, height: 0 });
  const resizeObserver = useRef(null);

  const onResize = useCallback(entries => {
    const { width, height } = entries[0].contentRect;
    setSize({ width, height });
  }, []);

  const ref = useCallback(
    node => {
      if (node !== null) {
        if (resizeObserver.current) {
          // Removed by sionwidjaja (now also works in dev environment)
          // resizeObserver.current.disconnect();
        }
        const ResizeObserver = window.ResizeObserver || ResizeObserverPolyfill;
        resizeObserver.current = new ResizeObserver(onResize);
        resizeObserver.current.observe(node);
      }
    },
    [onResize]
  );

  useEffect(() => () => {
    resizeObserver.current.disconnect();
  }, []);

  return { ref, width: size.width, height: size.height };
}
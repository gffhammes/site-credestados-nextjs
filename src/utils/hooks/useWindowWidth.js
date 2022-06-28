import React, { useEffect, useState } from 'react'

export const useWindowWidth = () => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      function handleResize() {
        setWidth(window.innerWidth);
      }

      window.addEventListener("resize", handleResize);       
      handleResize();    
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [])

  return width;
}

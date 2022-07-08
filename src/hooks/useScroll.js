import { useEffect, useState } from "react";

export const useScroll = () => {
  const [scroll, setScroll] = useState(0)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [])

  const handleScroll = () => {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop;
    setScroll(distanceY);
  }

  return scroll;
}
import React, { useMemo } from 'react'
import { useWindowWidth } from './useWindowWidth'

export const useIsMobile = () => {
  const windowWidth = useWindowWidth()
  const isMobile = windowWidth < 1000

  const isMobileMemo = useMemo(() => isMobile, [isMobile])

  return isMobileMemo
}

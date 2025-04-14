import { IAutoScrollOptions } from '@Interfaces'
import { useEffect, RefObject } from 'react'



const useAutoScroll = (
  ref: RefObject<HTMLElement | null>,
  { scrollAmount, interval = 30, scrollPercentage, enabled = true }: IAutoScrollOptions = {}
) => {
  useEffect(() => {
    const scrollContainer = ref.current

    if (!scrollContainer || !enabled || window.innerWidth >= 768) return

    let scrollPos = 0
    const amountToScroll = scrollPercentage
      ? scrollContainer.clientWidth * scrollPercentage
      : scrollAmount ?? 1

    const autoScroll = setInterval(() => {
      if (!scrollContainer) return

      scrollContainer.scrollLeft += amountToScroll
      scrollPos += amountToScroll

      if (scrollPos >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
        scrollContainer.scrollLeft = 0
        scrollPos = 0
      }
    }, interval)

    return () => clearInterval(autoScroll)
  }, [ref, scrollAmount, interval, scrollPercentage, enabled])
}

export default useAutoScroll

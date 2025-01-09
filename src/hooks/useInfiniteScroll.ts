import { useState, useEffect } from "react";
import { debounce } from "../utils/debounce";

export const useInfiniteScroll = <T>(
  data: T[] | undefined,
  initialCount = 20,
  step = 20
) => {
  const [visibleItems, setVisibleItems] = useState<T[]>([]);
  const [currentIndex, setCurrentIndex] = useState(initialCount);

  useEffect(() => {
    if (data) {
      setVisibleItems(data.slice(0, currentIndex));
    }
  }, [data, currentIndex]);

  const handleScroll = debounce(() => {
    if (
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 &&
      currentIndex < (data?.length || 0)
    ) {
      setCurrentIndex((prevIndex) => prevIndex + step);
    }
  }, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [currentIndex, data, handleScroll]);

  return { visibleItems };
};

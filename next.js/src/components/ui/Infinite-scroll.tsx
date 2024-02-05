import React, { useEffect, useState, useRef } from "react";

interface InfiniteScrollProps {
  nextPageFetch: () => void;
}

const InfiniteScroll: React.FC<InfiniteScrollProps> = ({ nextPageFetch }) => {
  const [isLoading, setIsLoadingPosts] = useState<boolean>(false);
  const loader = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(async (entries) => {
      if (entries[0].isIntersecting) {
        setIsLoadingPosts(true);
        await nextPageFetch();
        setIsLoadingPosts(false);
      }
    });

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, []);

  return <div ref={loader}>{isLoading && <div>Loading more posts...</div>}</div>;
};

export default InfiniteScroll;

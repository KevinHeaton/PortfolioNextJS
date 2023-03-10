// Description: This is a component that will animate the children when they are in view.

import { useState, useEffect, useRef } from 'react';

const AnimatedOnScroll = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  // This is a hook that will run when the component is mounted
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.25 });

    observer.observe(elementRef.current);

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    // This is a ternary operator. If isVisible is true, then the class 'show' will be added to the div. If it is false, then the class 'show' will not be added.
    <div
      ref={elementRef}
      className={`animate-on-scroll min-w-full ${isVisible ? 'show' : ''}`}
    >
      {children}
    </div>
  );
};

export default AnimatedOnScroll;

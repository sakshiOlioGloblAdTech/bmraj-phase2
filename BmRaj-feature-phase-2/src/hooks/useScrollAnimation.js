"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Custom hook for scroll-based animations using Intersection Observer
 * @param {Object} options - Configuration options
 * @param {number} options.threshold - Visibility threshold (0-1), default 0.1
 * @param {string} options.rootMargin - Root margin for earlier/later trigger, default "0px"
 * @param {boolean} options.triggerOnce - If true, animation triggers only once, default true
 * @returns {Object} - { ref, isInView }
 */
export function useScrollAnimation(options = {}) {
  const { threshold = 0.1, rootMargin = "0px 0px -50px 0px", triggerOnce = true } = options;
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  // Prevent hydration mismatch by only running on client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (triggerOnce) {
            observer.unobserve(element);
          }
        } else if (!triggerOnce) {
          setIsInView(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [isMounted, threshold, rootMargin, triggerOnce]);

  return { ref, isInView };
}

/**
 * Custom hook for multiple elements with staggered animations
 * @param {number} count - Number of elements to animate
 * @param {Object} options - Configuration options
 * @returns {Array} - Array of { ref, isInView } objects
 */
export function useStaggeredAnimation(count, options = {}) {
  const { threshold = 0.1, rootMargin = "0px 0px -50px 0px", triggerOnce = true, staggerDelay = 100 } = options;
  const refs = useRef([]);
  const [inViewStates, setInViewStates] = useState(Array(count).fill(false));
  const [isMounted, setIsMounted] = useState(false);

  // Prevent hydration mismatch by only running on client
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    const observers = [];

    refs.current.forEach((element, index) => {
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Add stagger delay
            setTimeout(() => {
              setInViewStates((prev) => {
                const newState = [...prev];
                newState[index] = true;
                return newState;
              });
            }, index * staggerDelay);

            if (triggerOnce) {
              observer.unobserve(element);
            }
          } else if (!triggerOnce) {
            setInViewStates((prev) => {
              const newState = [...prev];
              newState[index] = false;
              return newState;
            });
          }
        },
        { threshold, rootMargin }
      );

      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer, index) => {
        if (refs.current[index]) {
          observer.unobserve(refs.current[index]);
        }
      });
    };
  }, [isMounted, count, threshold, rootMargin, triggerOnce, staggerDelay]);

  const setRef = (index) => (el) => {
    refs.current[index] = el;
  };

  return { setRef, inViewStates };
}

export default useScrollAnimation;

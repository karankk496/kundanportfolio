'use client';

import { useEffect, useState } from 'react';

export function TypingAnimation({ text, className = '' }: { text: string; className?: string }) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(500); 

  useEffect(() => {
    if (text.length === 0) return;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (currentIndex < text.length) {
          setDisplayText(text.substring(0, currentIndex + 1));
          setCurrentIndex(currentIndex + 1);
          setTypingSpeed(150);
        } else {
          // Pause at the end of the word
          setTimeout(() => {
            setIsDeleting(true);
            setTypingSpeed(100); // Slower backspacing
          }, 3000); // Longer pause before deleting
        }
      } else {
        // Deleting
        if (currentIndex > 0) {
          setDisplayText(text.substring(0, currentIndex - 1));
          setCurrentIndex(currentIndex - 1);
        } else {
          setIsDeleting(false);
          setTypingSpeed(150);
        }
      }
    }, isDeleting ? typingSpeed / 2 : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentIndex, isDeleting, text, typingSpeed]);

  return (
    <span className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  );
}

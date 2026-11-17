'use client';

import React, { useEffect, useState } from 'react';
import { useReducedMotion } from '@/app/hooks/useReducedMotion';

interface AnimatedTextProps {
  roles: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  roles,
  typingSpeed = 90,
  deletingSpeed = 45,
  pauseDuration = 2000,
  className = '',
}) => {
  const prefersReducedMotion = useReducedMotion();
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      setDisplayedText(roles[0] || '');
      return;
    }

    const currentFullRole = roles[currentRoleIndex] || '';

    let timer: NodeJS.Timeout;

    if (!isDeleting && displayedText === currentFullRole) {
      // Pause when full role is typed
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, pauseDuration);
    } else if (isDeleting && displayedText === '') {
      // Move to next role when deleted
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    } else {
      // Typing or deleting characters
      const speed = isDeleting ? deletingSpeed : typingSpeed;
      timer = setTimeout(() => {
        setDisplayedText((prev) =>
          isDeleting
            ? prev.slice(0, -1)
            : currentFullRole.slice(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [
    displayedText,
    isDeleting,
    currentRoleIndex,
    roles,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    prefersReducedMotion,
  ]);

  if (prefersReducedMotion) {
    return (
      <span className={`inline-block font-medium ${className}`}>
        {roles[0]}
      </span>
    );
  }

  return (
    <span className={`inline-flex items-center font-medium ${className}`}>
      <span>{displayedText}</span>
      <span
        aria-hidden="true"
        className="ml-1 inline-block w-[3px] h-[1.1em] bg-purple-400 animate-pulse rounded-full"
      />
    </span>
  );
};

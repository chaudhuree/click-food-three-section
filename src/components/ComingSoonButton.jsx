import React, { useEffect, useRef } from 'react';


export default function ComingSoonButton() {
  const buttonRef = useRef(null);
  const circleRef = useRef(null);
  const glowTimeoutRef = useRef(null);
  const moveTimeoutRef = useRef(null);
  const cursorXRef = useRef(0);
  const cursorYRef = useRef(0);
  const currentXRef = useRef(0);
  const currentYRef = useRef(0);
  const targetColorRef = useRef('#FF00FF');
  const entryDirectionRef = useRef('right');
  const followDelay = 10;

  useEffect(() => {
    const button = buttonRef.current;
    const circle = circleRef.current;

    const interpolateColor = (color1, color2, factor) => {
      const result = color1
        .slice(1)
        .match(/.{2}/g)
        .map((hex, i) =>
          Math.round(
            parseInt(hex, 16) +
              factor *
                (parseInt(color2.slice(1).match(/.{2}/g)[i], 16) -
                  parseInt(hex, 16))
          )
        )
        .map((n) => n.toString(16).padStart(2, '0'))
        .join('');
      return `#${result}`;
    };

    const updateCirclePosition = () => {
      const dx = cursorXRef.current - currentXRef.current;
      const dy = cursorYRef.current - currentYRef.current;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance > 1) {
        currentXRef.current += dx * 0.1;
        currentYRef.current += dy * 0.1;
        circle.style.left = `${currentXRef.current}px`;
        circle.style.top = `${currentYRef.current}px`;
        circle.style.background = targetColorRef.current;

        requestAnimationFrame(updateCirclePosition);
      }
    };

    const handleMouseMove = (e) => {
      clearTimeout(glowTimeoutRef.current);
      cursorXRef.current = e.clientX - button.getBoundingClientRect().left;
      cursorYRef.current = e.clientY - button.getBoundingClientRect().top;

      if (entryDirectionRef.current === 'right') {
        targetColorRef.current = interpolateColor(
          '#00FFFF',
          '#FF00FF',
          cursorXRef.current / button.getBoundingClientRect().width
        );
      } else {
        targetColorRef.current = interpolateColor(
          '#FF00FF',
          '#00FFFF',
          cursorXRef.current / button.getBoundingClientRect().width
        );
      }

      clearTimeout(moveTimeoutRef.current);
      moveTimeoutRef.current = setTimeout(() => {
        requestAnimationFrame(updateCirclePosition);
      }, followDelay);

      glowTimeoutRef.current = setTimeout(() => {
        circle.classList.add('glowing');
      }, 500);

      circle.style.display = 'block';
    };

    const handleMouseLeave = () => {
      circle.style.display = 'none';
      circle.classList.remove('glowing');
      clearTimeout(glowTimeoutRef.current);
      clearTimeout(moveTimeoutRef.current);
    };

    const handleMouseEnter = (e) => {
      const buttonRect = button.getBoundingClientRect();
      const entryX = e.clientX - buttonRect.left;
      entryDirectionRef.current = entryX < buttonRect.width / 2 ? 'left' : 'right';
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);
    button.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
      button.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  return (
    <button ref={buttonRef} className="color-button mx-auto font-viga max-md:hidden">
      <span className="text">COMING SOON</span>
      <div ref={circleRef} className="circle"></div>
    </button>
  );
}

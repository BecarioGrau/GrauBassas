import React, { useEffect, useRef } from 'react';

export default function Marquee({ items = [], speed = 1 }) {
  const contentRef = useRef(null);
  const posRef = useRef(0);
  const rafRef = useRef(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;

    function animate() {
      posRef.current -= speed;
      const contentWidth = el.scrollWidth / 3; 

      if (Math.abs(posRef.current) >= contentWidth) {
        posRef.current = 0;
      }
      el.style.transform = `translateX(${posRef.current}px)`;
      rafRef.current = requestAnimationFrame(animate);
    }

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [speed, items]);

  const list = items.map((it, idx) => (
    <React.Fragment key={`item-${idx}`}>
      <span className="cursor-pointer transition-all duration-300 hover:text-primary hover:scale-110 inline-block mx-10">{it}</span>
      <span className="mx-10 items-center">•</span>
    </React.Fragment>
  ));

  return (
    <div className="w-full">
      <div className="bg-[#555] text-white text-xs py-2 relative overflow-hidden" id="marquee-container">
        <div ref={contentRef} id="marquee-content" className="flex whitespace-nowrap tracking-widest uppercase font-semibold" style={{ willChange: 'transform' }}>
          {list}
          {list}
          {list}
        </div>
      </div>
    </div>
  );
}

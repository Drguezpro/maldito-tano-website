// src/components/MenuNav.jsx
import { useState, useEffect } from 'react';

/**
 * MenuNav
 * Props:
 *  - sections: object where keys are category names and values are arrays of items
 */
export default function MenuNav({ sections }) {
  const keys = Object.keys(sections);
  const [active, setActive] = useState(keys[0]);

  // Scroll-spy: highlight active section
  useEffect(() => {
    const observers = keys.map(id => {
      const el = document.getElementById(id.toLowerCase());
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: '-50% 0px -50% 0px' }
      );
      obs.observe(el);
      return () => obs.disconnect();
    });
    return () => observers.forEach(clean => clean && clean());
  }, [keys]);

  return (
    <nav className="hidden lg:block sticky top-20 self-start">
      <ul className="space-y-2">
        {keys.map(id => (
          <li key={id}>
            <a
              href={`#${id.toLowerCase()}`}
              className={`block px-4 py-2 rounded transition-colors ${
                active === id
                  ? 'bg-red-600 text-white'
                  : 'text-gray-700 hover:bg-gray-200'
              }`}
            >
              {id}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

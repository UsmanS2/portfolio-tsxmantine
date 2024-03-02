import React, { useState, useEffect } from 'react';
import { IconArrowNarrowDown } from '@tabler/icons-react';

function FadeIcon() {
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      // Define the point where the fade effect should start and end
      const startPoint = 0;
      const fadeDistance = 300; // Adjust based on your needs

      // Calculate opacity based on scroll position
      const newOpacity = 1 - Math.min(window.scrollY - startPoint, fadeDistance) / fadeDistance;
      setOpacity(Math.max(newOpacity, 0));
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <IconArrowNarrowDown size="15rem" stroke={1.5} style={{ opacity: opacity }} />;
}

export default FadeIcon;

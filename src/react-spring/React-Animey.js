import { useSpring, animated } from '@react-spring/web';
import React from 'react';
// import './MyComponent.css';

export default function MyComponent() {

  const styles = useSpring({
    from: { transform: 'scale(0)' },
    to: { transform: 'scale(1)' },
    config: { tension: 200, friction: 12 },
  });

  const springs = useSpring({
    from: { x: -1000 },
    to: { x: 0 },
  });

  return (
    <div className="flex-container">
      <animated.div className="animy-container" style={styles}>
        <img src='' alt='image 1'/>
      </animated.div>
      <animated.div className="animy-container" style={styles}>
        <img src='' alt='image 2'/>
      </animated.div>
      <animated.div
        className="animy-container"
        style={{
          // ...styles,
          ...springs,
        }}
      >
        <img src='' alt='image 3'/>
      </animated.div>
    </div>
  );
}

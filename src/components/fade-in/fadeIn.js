import { useState, useEffect } from 'react';

function FadeIn({ children, delay }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setVisible(true), delay);
  }, [delay]);

  return (
    <div className={`fade-in ${visible ? 'visible' : ''}`}>
      {children}
    </div>
  );
}

export default FadeIn;
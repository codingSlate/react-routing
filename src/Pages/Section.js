import React, { useEffect, useRef } from 'react';
import Helmet from 'react-helmet';

const Section = ({ children, headingText, headingLevel = 1 }) => {
  const H = `h${headingLevel}`;

  const headingRef = useRef(null);

  useEffect(() => {
    headingRef.current.focus()
    console.log(headingRef.current);
  }, []);

  return (
    <section>
      <Helmet>
        <title>{`${headingText} | Ultimate Weather App`}</title>
      </Helmet>
      {/* -1 or 0 */}
      <H ref={headingRef} tabIndex="-1">
        {headingText}
      </H>
      {children}
    </section>
  );
};
export default Section;

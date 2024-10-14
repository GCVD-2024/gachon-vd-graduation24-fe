const SvgDefs = () => (
  <svg height="0" width="0">
    <defs>
      <filter id="water" x="0" y="0">
        <feGaussianBlur in="SourceGraphic" stdDeviation="12" result="blur" />
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="1 0 0 0 0  
                  0 1 0 0 0  
                  0 0 1 0 0  
                  0 0 0 19 -9"
          result="goo"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgDefs;

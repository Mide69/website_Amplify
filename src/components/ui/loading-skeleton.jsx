const LoadingSkeleton = ({ width = "100%", height = "20px", className = "" }) => (
  <div 
    className={`loading-skeleton ${className}`}
    style={{ width, height }}
    aria-label="Loading content"
  />
);

export default LoadingSkeleton;
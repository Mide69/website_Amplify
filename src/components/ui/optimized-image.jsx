import Image from 'next/image';
import { useState } from 'react';
import LoadingSkeleton from './loading-skeleton';

const OptimizedImage = ({ src, alt, width, height, className = "", priority = false }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  return (
    <div className={`image-container ${className}`} style={{ width, height }}>
      {isLoading && <LoadingSkeleton width={width} height={height} />}
      {error ? (
        <div className="image-error" style={{ width, height }}>
          <span>Image failed to load</span>
        </div>
      ) : (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setError(true);
          }}
          style={{ display: isLoading ? 'none' : 'block' }}
        />
      )}
    </div>
  );
};

export default OptimizedImage;
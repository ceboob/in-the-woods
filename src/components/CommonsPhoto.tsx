import type { ImgHTMLAttributes } from 'react';
import type { commonsPhotos } from '@/lib/commonsPhotos';

type CommonsPhotoDetails = (typeof commonsPhotos)[keyof typeof commonsPhotos];

interface CommonsPhotoProps extends Omit<ImgHTMLAttributes<HTMLImageElement>, 'src'> {
  photo: CommonsPhotoDetails;
  caption?: string;
}

const CommonsPhoto = ({ photo, caption, className, ...imageProps }: CommonsPhotoProps) => (
  <figure className="my-8">
    <img
      {...imageProps}
      src={photo.image}
      width={photo.width}
      height={photo.height}
      decoding="async"
      className={`w-full rounded-lg ${className ?? ''}`}
    />
    <figcaption className="mt-2 text-sm text-muted-foreground">
      {caption && `${caption} · `}
      Fot.{' '}
      <a href={photo.source} target="_blank" rel="noopener noreferrer" className="underline">
        {photo.author}
      </a>
      , licencja{' '}
      <a
        href={photo.licenseUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="underline"
      >
        {photo.license}
      </a>
      .
    </figcaption>
  </figure>
);

export default CommonsPhoto;

const RATIO = 16 / 9;

export const VideoPlayer = ({
  title,
  src,
  width = 560,
}: {
  title: string;
  src: string;
  width?: number;
}) => {
  return (
    <iframe
      width={width}
      height={width / RATIO}
      src={src}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};

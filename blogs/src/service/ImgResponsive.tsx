const ImgResponsive = ({
  url,
  sizes,
  widths = [200, 400, 600, 800],
  width,
  height,
  alt = "Amazing good job!",
  className,
}: propsType): React.ReactElement => {
  return (
    <>
      <img
        src={`${url}?v=${rdmVer()}`}
        alt={alt}
        srcSet={widths!
          .map((item: number) => {
            return `${url}?v=${rdmVer()}&width=${item} ${item}w`;
          })
          .join(" ,")}
        sizes={sizes}
        className={className}
        width={width}
        height={height}
        loading="lazy"
      />
    </>
  );
};

export default ImgResponsive;

type propsType = {
  url: string;
  sizes?: string;
  widths?: number[];
  width?: number;
  height?: number;
  alt?: string;
  className?: string;
};
const rdmVer = (): number => {
  return Math.floor(Math.random() * 1000000);
};

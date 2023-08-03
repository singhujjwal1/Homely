export default function Image({ src, ...rest }) {
  src =
    src && src.includes("https://")
      ? src
      : "https://homely-backend-ogr1.onrender.com/uploads/" + src;
  return <img {...rest} src={src} alt={""} />;
}

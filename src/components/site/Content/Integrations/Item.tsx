import Image from "next/image";

interface IntegrationProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const IntegrationItem = ({ src, alt, width, height }: IntegrationProps) => {
  return (
    <li>
      <Image src={src} alt={alt} className="" width={width} height={height} />
    </li>
  );
};

export default IntegrationItem;

import Image from "next/image";
import { useRouter } from "next/navigation";

interface LogoProps {
  onClick?: () => void;
  isNavLight?: boolean;
}

const Logo = ({ onClick }: LogoProps = {}) => {
  const router = useRouter();

  return (
    <button
      type="button"
      className="inline-flex shrink-0 cursor-pointer select-none border-0 bg-transparent p-0"
      onClick={() => {
        router.push("/");
        onClick?.();
      }}
    >
      <Image
        src="/images/(common)/half_byte_logo.jpeg"
        alt="Half Byte — Amplifying digital intelligence"
        width={147}
        height={49}
        className="object-contain object-left"
        priority
      />
    </button>
  );
};

export default Logo;

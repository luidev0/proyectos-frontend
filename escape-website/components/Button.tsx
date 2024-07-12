import Image from "next/image";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  icon?: string;
  variant: string;
  full?: boolean;
};

const Button = ({ type, title, icon, variant, full }: ButtonProps) => {
  return (
    <button
      type={type}
      className={`flexCenter gap-3 rounded-full border ${variant} ${
        full && "w-full"
      }`}
    >
      {icon && (
        <Image
          src={icon}
          alt={title}
          width={0}
          height={0}
          sizes="100vw"
          className="w-auto h-auto"
        />
      )}
      <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
    </button>
  );
};

export default Button;

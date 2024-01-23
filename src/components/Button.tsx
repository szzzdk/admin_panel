import { VariantProps, cva } from "class-variance-authority";
import { ComponentProps } from 'react';

const buttonStyles = cva(["transition-colors"], {
  variants: {
    variant: {
      default: ["bg-secondary", "hover: bg-secondary-hover"],
      ghost: ["hover: bg-gray-100"],
    },
    size: {
      default: ["rounded", "p-2"],
      icon: [
        "rounded-full",
        "w-10",
        "h-10",
        "flex",
        "item-center",
        "justify-center",
        "p-2.5",
      ],
    },
  },
});

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<"button">

export default function Button({ variant, size, className, ...props }: ButtonProps) {
  return <button {...props} className={buttonStyles({variant, size, className})}/>;
}

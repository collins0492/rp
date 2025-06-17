export interface ButtonProps {
  text?: string;
  disabled?: boolean;
  variant?: "contained" | "outlined" | "text" | "link";
  color?: "primary" | "secondary";
  size?: "large" | "regular" | "small";
  rounded?: "none" | "sm" | "md" | "lg" | "full";
  class?: string;
}

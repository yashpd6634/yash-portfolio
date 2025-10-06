// Common TypeScript interfaces and types for the portfolio

export interface ButtonProps {
  id?: string;
  title: string;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  containerClass?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export interface AnimatedTitleProps {
  title: string;
  containerClass?: string;
}

export interface ImageClipBoxProps {
  src: string;
  clipClass: string;
}

export interface NavItem {
  label: string;
  href: string;
}

// Add more interfaces as needed
export interface SectionProps {
  id?: string;
  className?: string;
  children?: React.ReactNode;
}

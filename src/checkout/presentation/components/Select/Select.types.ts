export interface SelectProps {
  value?: string;
  items: {
    name: string;
    value: string;
    caption?: string
  }[]

  onChange?: (value: string) => void;
}
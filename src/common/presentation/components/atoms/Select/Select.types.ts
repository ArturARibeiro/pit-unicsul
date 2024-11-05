import {SelectHTMLAttributes} from "react";

export type SelectOption = {
  value: string|number,
  name: string,
  selected?: boolean,
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  options?: SelectOption[];
  placeholder?: string;
}
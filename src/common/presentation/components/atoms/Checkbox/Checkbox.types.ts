import type {InputHTMLAttributes} from "react";

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: 'checkbox';
}
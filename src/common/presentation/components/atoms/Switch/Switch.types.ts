import type {InputHTMLAttributes} from "react";

export interface SwitchProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: 'checkbox';
}
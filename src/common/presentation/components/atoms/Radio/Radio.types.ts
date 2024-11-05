import type {InputHTMLAttributes} from "react";

export interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: 'radio';
}
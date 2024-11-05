import type {HTMLAttributes} from "react";

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant: 'success' | 'danger' | 'info' | 'warning'
}
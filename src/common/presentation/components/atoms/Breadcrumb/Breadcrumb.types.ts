import {HTMLAttributes} from "react";

export type BreadcrumbItem = {
  name: string;
  href?: string;
}

export interface BreadcrumbProps extends HTMLAttributes<HTMLOListElement> {
  items: BreadcrumbItem[];
}
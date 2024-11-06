import {HTMLAttributes} from "react";

export interface ProductRatingProps extends HTMLAttributes<HTMLSpanElement> {
  rating: number;
}
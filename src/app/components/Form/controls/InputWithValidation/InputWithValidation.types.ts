import { InputHTMLAttributes } from 'react';

export interface InputFormTypes extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  error?: string;
}

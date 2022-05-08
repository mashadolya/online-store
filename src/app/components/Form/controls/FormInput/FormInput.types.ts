import { InputProps } from 'src/app/components/controls/Input/Input.types';

export interface UseInputPropsReturn extends InputProps {
  name: string;
  error?: string;
}

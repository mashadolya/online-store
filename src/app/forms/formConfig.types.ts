import { AnyObjectSchema } from 'yup';

export interface FormConfig {
  formId: string;
  title: string;
  headerBody?: string;
  fields: Record<string, any>[];
  submitLabel: string;
  validationSchema: AnyObjectSchema;
}

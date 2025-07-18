// Simple form types for UI prototype

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'phone' | 'textarea' | 'select' | 'checkbox' | 'radio';
  value: any;
  placeholder?: string;
  isRequired: boolean;
  options?: { value: string; label: string }[];
  error?: string;
}

export interface FormState {
  data: Record<string, any>;
  errors: Record<string, string>;
  isValid: boolean;
  isSubmitting: boolean;
}
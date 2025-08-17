export interface DropdownFieldProps {
  label: string;
  value: string;
  options: {
    label: string;
    value: string;
  }[];
  onChange: (value: string) => void;
  disabled?: boolean;
  status?: string;
  defaultValue?: string;
  cutText?: boolean;
}

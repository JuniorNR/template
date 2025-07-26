import type { FormStatuses } from '../../../../model/types/Form.types';
import type { FieldErrors } from 'react-hook-form';

export interface FormButtonControlsProps {
  onSubmit: (event: React.SyntheticEvent) => void;
  statusForm: FormStatuses;
  changeStatusForm: (status: FormStatuses) => void;
  errors?: FieldErrors;
  loading?: boolean;
  isValid?: boolean;
}

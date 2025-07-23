import type { FormStatuses } from '../../../../model/types/Form.types';

export interface FormTitleProps {
  text: string;
  statusForm: FormStatuses;
  loading?: boolean;
}

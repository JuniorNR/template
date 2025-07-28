export interface QuestionProps {
  title: string;
  description: string;
  onConfirm: () => void;
  onCancel?: () => void;
}

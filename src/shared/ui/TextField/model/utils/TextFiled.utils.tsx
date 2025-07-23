import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import EditOffIcon from '@mui/icons-material/EditOff';
import InfoIcon from '@mui/icons-material/Info';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import ReportIcon from '@mui/icons-material/Report';
import WarningIcon from '@mui/icons-material/Warning';

export const enum TextFieldStatuses {
  DEFAULT = 'default',
  ERROR = 'error',
  SUCCESS = 'success',
  INFO = 'info',
  ATTENTION = 'attention',
}

export const renderStatusIcons = ({
  status,
  editable,
  disabled,
}: {
  status: string;
  editable: boolean;
  disabled: boolean;
}) => {
  let statusIcon: React.ReactNode | null = null;
  const editableIcon = editable ? null : <EditOffIcon key='editable' />;
  const disabledIcon = disabled ? <NotInterestedIcon key='disabled' /> : null;

  switch (status) {
    case TextFieldStatuses.ERROR:
      statusIcon = <WarningIcon key={TextFieldStatuses.ERROR} />;
      break;
    case TextFieldStatuses.ATTENTION:
      statusIcon = <ReportIcon key={TextFieldStatuses.ATTENTION} />;
      break;
    case TextFieldStatuses.SUCCESS:
      statusIcon = <CheckCircleIcon key={TextFieldStatuses.SUCCESS} />;
      break;
    case TextFieldStatuses.INFO:
      statusIcon = <InfoIcon key={TextFieldStatuses.INFO} />;
      break;
    default:
      break;
  }

  return [statusIcon, editableIcon, disabledIcon];
};

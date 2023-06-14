import { RefreshMe } from '../RefreshMe/RefreshMe';
import { ConnectionError } from '../ConnectionError/ConnectionError';

export enum ErrorTypeEnum {
  refreshPage = 'refreshPage',
  connectionError = 'connectionError',
}

export interface IErrorPageProps {
  errorType: ErrorTypeEnum;
}

export const ErrorPage = ({ errorType }: IErrorPageProps) => {
  if (errorType === ErrorTypeEnum.connectionError) {
    return <ConnectionError />;
  }
  return <RefreshMe />;
};

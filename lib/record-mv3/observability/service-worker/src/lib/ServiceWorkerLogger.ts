/* eslint-disable @typescript-eslint/no-explicit-any */
import { IPostBodyInput, postDataToDataDogOrLog } from './postDataToDataDog';

interface IMessageAndContextForPayload {
  message: string;
  applicationState?: any;
}
export class ServiceWorkerLogger {
  private tags: string;
  private serviceName: string;

  constructor(tags: string, serviceName: string) {
    this.tags = tags;
    this.serviceName = serviceName;
  }

  async info(message: string, applicationState?: any) {
    await postDataToDataDogOrLog(
      this.createPayload({ message, applicationState }, 'info'),
    );
  }

  async warn(message: string, applicationState?: any) {
    await postDataToDataDogOrLog(
      this.createPayload({ message, applicationState }, 'warn'),
    );
  }

  async error(message: string, applicationState?: any) {
    await postDataToDataDogOrLog(
      this.createPayload({ message, applicationState }, 'error'),
    );
  }

  private createPayload(
    data: IMessageAndContextForPayload,
    status: IPostBodyInput['status'],
  ) {
    return {
      service: this.serviceName,
      ddtags: this.tags,
      message: data.message,
      status: status,
      applicationState: data.applicationState,
    };
  }
}

import { environment } from '@castify/record-mv3/environment';
import { nanoid } from 'nanoid';

export interface IPostBodyInput {
  service: string;
  ddtags: string;
  message: string;
  status: 'info' | 'error' | 'warn';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  applicationState?: any;
}

interface IPostDataToDataDogBody extends IPostBodyInput {
  application_id: string;
}

export async function postDataToDataDogOrLog(data: IPostBodyInput) {
  //We don't want to call datadog if we're not in staging or prod
  //This guard makes consumption easier elsewhere
  if (
    environment.dataDogEnv === 'cfy-stage' ||
    environment.dataDogEnv === 'cfy-prod'
  ) {
    try {
      const url = await constructUrl();
      //in service worker context must use fetch axios will not import
      const res = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(createRequestBody(data)),
      });
      //only return true if we get a 202 back from datadog
      if (res.status === 202) return true;
    } catch (error) {
      //we can't log anything here in this use case because it won't get sent to datadog
    }
  } else {
    if (data.applicationState) {
      // eslint-disable-next-line no-console
      console.log(data.message, data.applicationState);
    } else {
      // eslint-disable-next-line no-console
      console.log(data.message);
    }
  }

  return false;
}

function createRequestBody(config: IPostBodyInput): IPostDataToDataDogBody {
  //since this will only get called when the application id is defined we can force to string below
  const data: IPostDataToDataDogBody = {
    ...config,
    application_id: environment.dataDogApplicationId as string,
  };
  return data;
}

const constructUrl = async (): Promise<string> => {
  const BROWSER = 'browser';
  const VERSION = '4.4.0';

  const datadogPostLogUrl = await environment.getExternalLink(
    'datadogPostLogUrl',
  );
  const url = new URL(datadogPostLogUrl);
  url.searchParams.append('ddsource', BROWSER);
  url.searchParams.append('env', environment.dataDogEnv);
  url.searchParams.append(
    'dd-api-key',
    environment.dataDogClientToken as string,
  );
  url.searchParams.append('env', environment.dataDogEnv);
  url.searchParams.append('dd-evp-origin-version', VERSION);
  url.searchParams.append('dd-evp-origin', BROWSER);
  url.searchParams.append('dd-request-id', nanoid());

  return url.toString();
};

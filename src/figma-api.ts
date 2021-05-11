import { request } from './utils';
import { getFileOptionalParams } from './types';

export const getFile = (fileId: string, optionalParams?: getFileOptionalParams) => {
  let url = new URL(`https://api.figma.com/v1/files/${ fileId }`);

  if (optionalParams !== undefined) {
    for (const param in optionalParams) {
      url.searchParams.set(param, optionalParams[param]);
    }
  }

  return request(url);
}

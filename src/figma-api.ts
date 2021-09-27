import { request } from './utils';
import { getFileOptionalParams, getFileNodesOptionalParams } from './types';

export const getFile = (fileId: string, optionalParams?: getFileOptionalParams) => {
  const url = new URL(`https://api.figma.com/v1/files/${ fileId }`);

  if (optionalParams !== undefined) {
    for (const param in optionalParams) {
      url.searchParams.set(param, optionalParams[param]);
    }
  }

  return request(url);
}

export const getFileNodes = (fileId: string, nodeIds: string, optionalParams?: getFileNodesOptionalParams) => {
  const url = new URL(`https://api.figma.com/v1/files/${ fileId }/nodes`);
  url.searchParams.set('ids', nodeIds);

  for (const param in optionalParams) {
    url.searchParams.set(param, optionalParams[param]);
  }

  return request(url);
}

export const getFileStyles = (fileId: string) => {
  const url = new URL(`https://api.figma.com/v1/files/${ fileId }/styles`);

  return request(url);
}

export const getTeamStyles = (teamId: string) => {
  const url = new URL(`https://api.figma.com/v1/files/${ teamId }/styles`);

  return request(url);
}
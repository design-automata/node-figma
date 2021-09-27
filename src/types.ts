export interface getFileOptionalParams {
  version?: string,
  ids?: string,
  depth?: number,
  geometry?: string,
  plugin_data?: string
}

export interface getFileNodesOptionalParams {
  version?: string,
  depth?: number,
  geometry?: string,
  plugin_data?: string
}

export interface getTeamStylesOptionalParams {
  page_size?: number,
  after?: number,
  before?: number
}
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

export interface getFileImagessOptionalParams {
  scale?: number,
  format?: string,
  svg_include_id?: boolean,
  svg_simplify_stroke?: boolean,
  use_absolute_bounds?: boolean,
  version?: string
}

export interface getTeamStylesOptionalParams {
  page_size?: number,
  after?: number,
  before?: number
}
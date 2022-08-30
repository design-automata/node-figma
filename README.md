# node-figma

Zero-dependency wrapper around the Figma API for Node.js.

## Getting started
Grab the lib:
```sh
npm i @design-automata/node-figma
```

Export your Figma PAT in your [environment variables](src/config.ts) before proceeding.
```sh
export FIGMA_PAT="your_figma_pat"
```

Import and use:
```js
const { getFile } = require('@design-automata/node-figma')

// ES6
import { getFile } from '@design-automata/node-figma'
```

## Supported API
```js
getFile(fileId: string, optionalParams?: getFileOptionalParams)

getFileNodes(fileId: string, nodeIds: string, optionalParams?: getFileNodesOptionalParams)

getFileImages(fileId: string, nodeIds: string, optionalParams?: getFileImagessOptionalParams)

getFileStyles(fileId: string)

getTeamStyles(teamId: string, optionalParams?: getTeamStylesOptionalParams)
```

## Types
* [getFileOptionalParams](src/types.ts)
* [getFileNodesOptionalParams](src/types.ts)
* [getFileImagessOptionalParams](src/types.ts)
* [getTeamStylesOptionalParams](src/types.ts)
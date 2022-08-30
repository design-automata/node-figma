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
import { getFile } from '@design-automata/node-figma'
```

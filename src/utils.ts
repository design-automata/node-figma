import https from 'https';
import { FIGMA_PAT } from './config';

// promisify https.request
export const request = (url: URL) => {
  return new Promise((resolve, reject) => {
    const options = {
      method: 'GET',
      headers: {
        'X-FIGMA-TOKEN': FIGMA_PAT
      }
    }

    let req = https.request(url, options, res => {
        if (res.statusCode < 200 || res.statusCode >= 300) {
            return reject(new Error(`Status Code: ${ res.statusCode }`));
        }

        let body = [];
        res.on('data', chunk => {
            body.push(chunk);
        });

        res.on('end', () => {
            try {
                body = JSON.parse(Buffer.concat(body).toString());
            } catch(e) {
                reject(e);
            }
            resolve(body);
        });
    });

    req.on('error', err => {
        reject(err);
    });

    // all systems go
    req.end();
  });
}
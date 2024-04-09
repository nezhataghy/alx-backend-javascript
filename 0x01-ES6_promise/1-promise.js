#!/usr/bin/node
export default function getResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (!success) return reject(new Error('The fake API is not working currently'));
    return resolve({ status: 200, body: 'Success' });
  });
}

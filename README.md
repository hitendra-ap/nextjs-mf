# Next.js Module Fed

This repository contains two applications, `app1` and `app2`, configured to use Module Federation with Next.js. These applications demonstrate how to share code between different applications dynamically.

Here `app1` is considered as a remote which serves the counter (a FE component) to the host `app2` which consumes it on the other end.

Note: we can share various JS modules, for example: css, CJS, EJS...etc

## Prerequisites

- Node.js (>=18.x.x)
- npm (>=10.x.x) or yarn (>=1.x.x)

## Running

To run both the application, cd to the folder and perform:
```sh
# port 3000 & port 3001
$ npm install
$ npm run dev

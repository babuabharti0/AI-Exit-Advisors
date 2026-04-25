import fs from 'node:fs/promises';
import path from 'node:path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from '../src/App';

const routes = ['/', '/about', '/contact'];
const distPath = path.resolve('dist');

async function build() {
  try {
    const templatePath = path.join(distPath, 'index.html');
    const template = await fs.readFile(templatePath, 'utf8');

    for (const route of routes) {
      // Create element from component
      const appHtml = renderToString(React.createElement(App, { url: route }));
      
      const html = template.replace(
        `<!-- SSR_APP_HTML -->`,
        appHtml
      ).replace(
        `<div id="root"></div>`,
        `<div id="root">${appHtml}</div>`
      );

      const filePath = path.join(
        distPath,
        route === '/' ? 'index.html' : `${route.substring(1)}.html`
      );
      
      await fs.writeFile(filePath, html);
      console.log(`Pre-rendered ${route} to ${filePath}`);
    }
  } catch (error) {
    console.error('Error during pre-rendering:', error);
    process.exit(1);
  }
}

build();

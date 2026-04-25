import { renderToString } from 'react-dom/server';
import App from './App';

export async function prerender(data: { url: string }) {
  const html = renderToString(<App url={data.url} />);

  return { html };
}

import * as express from 'express';
import * as next from 'next';

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  server.get('/category/:category', (req, res) => {
    return app.render(req, res, '/', { category: req.params.category });
  });

  server.get('/search/:query', (req, res) => {
    return app.render(req, res, '/search', { q: req.params.query });
  });

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) {
      throw err;
    }
    console.log(`> Ready on http://localhost:${port}`);
  });
});

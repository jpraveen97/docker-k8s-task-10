const { test } = require('node:test');
const assert = require('node:assert');
const createServer = require('../server');

test('Application should return a successful response', async () => {
    const server = createServer();

    await new Promise(resolve => server.listen(0, resolve));

    const port = server.address().port;

    try {
        const response = await fetch(`http://localhost:${port}`);

        assert.strictEqual(response.status, 200);

        const body = await response.text();

        assert.match(body, /Task-10 CI\/CD Application/);
        assert.match(body, /Status: Running Successfully/);
    } finally {
        await new Promise(resolve => server.close(resolve));
    }
});
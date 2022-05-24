import fastify from 'fastify';
import model1 from 'models/model1';

const server = fastify()

server.get('/ping', async (request, reply) => {
  return 'pong\n'
})

server.listen(3010, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`);
  model1();
})
import fastify from "fastify";
import { SomeClass } from "./lib";
import { errorHandler } from "./error-handler";

const server = fastify({
  logger: true,
});

server.setErrorHandler(errorHandler);

const foo = new SomeClass();

server.get("/", async (request, reply) => {
  foo.doSomething();

  reply.send({ hello: "world" });
});

server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server listening at ${address}`);
});

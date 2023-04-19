import fastify, { FastifyError, FastifyReply, FastifyRequest } from "fastify";
import type { FastifyInstance } from "fastify";
import { CustomError } from "./errors";

export function errorHandler(
  this: FastifyInstance,
  error: FastifyError,
  request: FastifyRequest,
  reply: FastifyReply
) {
  if (error instanceof CustomError) {
    this.log.info("found a CustomError");
  }

  if (error instanceof fastify.errorCodes.FST_ERR_BAD_STATUS_CODE) {
    // Log error
    this.log.error(error);

    // Send error response
    reply.status(500).send({ ok: false });
  } else {
    // fastify will use parent error handler to handle this
    reply.send(error);
  }
}

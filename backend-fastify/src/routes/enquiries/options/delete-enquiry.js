import { enquiryProperties } from "./schema.js";
import { responseSuccess, responseError } from '../../../utils/schema/response.js';

/**
 * Options for handling a delete request for an Enquiry.
 * @param {Object} fastify - The Fastify instance.
 * @param {Function} handler - The request handler.
 * @returns {Object} - Fastify route options.
 */
export const deleteEnquiryOpts = (fastify, handler) => ({
  preValidation: [fastify.authenticate],
  schema: {
    response: {
      200: responseSuccess({
        message: "Enquiry deleted!",
        data: enquiryProperties
      }),
      400: responseError({
        status: 400,
        message: "Bad Request. Invalid input or parameters."
      }),
      404: responseError({
        status: 404,
        message: "Enquiry not found."
      })
    },
  },
  handler: handler,
});

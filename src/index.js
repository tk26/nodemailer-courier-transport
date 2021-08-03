const { CourierClient } = require("@trycourier/courier");
const packageData = require("../package.json");

const send = courierSend => async ({ data: input }, callback) => {
  try {
    const { messageId } = await courierSend(input);
    callback(null, { messageId });
  } catch (error) {
    callback(error);
  }
};

const transport = (options) => {
  const courier = CourierClient({ authorizationToken: options.apiKey });

  const courierSend = input => courier.send({
    eventId: input.eventId,
    recipientId: input.userId,
    profile: {
      email: input.to,
    },
  });

  return {
    name: "Courier",
    version: packageData.version,
    send: send(courierSend),
  };
};

transport._send = send;

module.exports = transport;

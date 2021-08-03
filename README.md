# nodemailer-courier-transport

## Usage

```js
const nodemailer = require("nodemailer");
const courierTransport = require("nodemailer-courier-transport");

// This is your API key that you retrieve from courier.com account (free up to 10K monthly sends)
const auth = {
  apiKey: "ABCDEFGHIJKLMN",
};

const nodemailerCourier = nodemailer.createTransport(courierTransport(auth));

nodemailerCourier.sendMail(
  {
    eventId: "courier-event-id", // Configured in Courier UI
    to: "recipient@domain.com",
    userId: "unique-user-id",
  },
  (err, info) => {
    if (err) {
      console.log(`Error: ${err}`);
    } else {
      console.log(`Response: ${info}`);
    }
  }
);
```

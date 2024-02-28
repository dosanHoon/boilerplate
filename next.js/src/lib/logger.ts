import winston from "winston";
const { combine, timestamp, json } = winston.format;

const logger = winston.createLogger({
  silent: process.env.NEXT_PUBLIC_ENV == "local",
  level: "info",
  format: combine(timestamp(), json()),
  transports: [
    new winston.transports.File({ filename: "logs/error.log", level: "error" }),
    new winston.transports.File({ filename: "logs/app.log" }),
  ],
});

export { logger };

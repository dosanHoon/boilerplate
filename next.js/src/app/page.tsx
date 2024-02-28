import { logger } from "@/lib/logger";

export default function Home() {
  logger.info({
    message: "Hello, world!",
  });
  return <main></main>;
}

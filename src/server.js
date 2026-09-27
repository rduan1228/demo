import { createServer } from "node:http";
import { handleTasks } from "./routes/tasks.js";

const port = Number(process.env.PORT ?? 8080);

createServer((req, res) => {
  if (req.url?.startsWith("/tasks")) return handleTasks(req, res);
  res.writeHead(404).end();
}).listen(port, () => console.log(`Tasklane listening on ${port}`));

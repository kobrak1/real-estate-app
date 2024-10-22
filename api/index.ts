import app from "./app"
import chalk from "chalk";
import { port } from "./utils/config"

const startServer = async (): Promise<void> => {
  console.log(`[${chalk.blue(new Date().toISOString())}] Server running in ${chalk.green(process.env.NODE_ENV || 'development')} mode on port ${chalk.red(port)}`);
};

app.listen(port, startServer);
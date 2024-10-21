const app = require("./app");
const config = require("./utils/config");

const startServer = async () => {
  const chalkModule = await import('chalk');
  const chalk = chalkModule.default;
  console.log(`[${chalk.blue(new Date().toISOString())}] Server running in ${chalk.green(process.env.NODE_ENV || 'development')} mode on port ${chalk.red(config.port)}`);
};

app.listen(config.port, startServer);
import chalk from "chalk";
import dotenv from "dotenv";

dotenv.config();

const environment = process.env.NODE_ENV || "development";

console.log(chalk.green(`Starting server in ${environment} mode`));

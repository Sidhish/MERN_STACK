const  chalk = require("chalk");


    const log = {
        error:(msg) => console.log(chalk.yellow("Error: ",msg)),
        warn:(msg) =>console.log(chalk.magenta("Warn: ",msg)),
        info:(msg) =>console.log(chalk.blackBright("Info: ",msg)),
        success:(msg) =>console.log(chalk.bgGreenBright("Success: ",msg))
    };


export default log;
const { spawn } = require("child_process");

// const result = await spawnAsync("npm", ["build", "--prefix", widgetStructure.base], {
//     cwd: process.cwd(),
//     env: process.env,
//     stdio: "pipe"
// });
// var savedOutput = result.stdout;

// console.log(String(savedOutput));
// return savedOutput;

(async () => {
    const exitCode = spawn("npm run build --prefix ~/Documents/repos/app-guide-mendix-widget/", {
        shell: true
    });

    console.log(`Starting Script`, exitCode.stdout);
    // Setup DB
})();

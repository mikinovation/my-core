const path = require('path');
const cssModulesPlugin = require('esbuild-css-modules-plugin');

require("esbuild").build({
    entryPoints: ["./application.js"],
    bundle: true,
    outdir: path.join(process.cwd(), "app/assets/builds"),
    absWorkingDir: path.join(process.cwd(), "app/javascript"),
    watch: true,
    plugins: [
        cssModulesPlugin()
    ],
}).catch(() => process.exit(1));
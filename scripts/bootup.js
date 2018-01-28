'strict mode'
const process = require('child_process');
const path = require('path')
const chalk = require('chalk');
const fs = require('fs')
const util = require('util');
const exec = util.promisify(require('child_process').exec);

var cmd=require('node-cmd');
/* ------------------------- Internal Dependencies -------------------------- */
async function ls() {
  // const { stdout, stderr } = await exec('open /Applications/Ganache.app');
}
// ls();
/* ---------------------------- Initialization ------------------------------ */
function main() { 

  cmd.get('open /Applications/Ganache.app');
  cmd.get(
        'pwd',
        function(err, data, stderr){

            cmd.get(
                `
                open /Applications/Ganache.app
                osascript -e 'tell app "Terminal"
                  do script " cd ${data} ; truffle compile ; truffle migrate --network ganache ; yarn start"
                end tell'
                `,
            );
        }
    );

}
main()
/* ------------------------- External Dependencies -------------------------- */
const path = require('path')
const fs = require('fs')
/* ------------------------- Internal Dependencies -------------------------- */

/* ---------------------------- Initialization ------------------------------ */
const inputDir = __dirname + '/files'
const outputDir = __dirname + '/output'
if(!fs.existsSync(outputDir)) fs.mkdirSync(outputDir)

/* ----------------------------- Module Logic ------------------------------- */
for (let childDirectory of fs.readdirSync(inputDir)){
    if (!fs.statSync(path.join(inputItem, childDirectory)).isDirectory()){
      let childDirectoryItems = fs.readdirSync(path.join(inputDir,childDirectory))
      // Map SVG files to SketchClean
      if (childDirectoryItems) {
        childDirectoryItems.map(function(item, ic){
          try {
            console.log(ic)
            const svg = item
            const file = fs.readFileSync(path.join(inputDir,childDirectory,svg), 'utf-8')
            const svgPure = sketchClean(file);
            fs.writeFileSync(path.join(__dirname + '/output',svg), svgPure)
          } catch (error) {
            console.log(error)
          }
        })
      }
    }
}


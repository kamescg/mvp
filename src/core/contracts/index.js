/* --------------------------- Require Context ----------------------------- */
const req = require.context('.', true, /\.\/.+\.json$/)

/* ------------------------- Import Dependencies --------------------------- */
req.keys().forEach((key) => {
  const name = key.replace(/^.+\/([^/]+)\.json/, '$1')
  console.log(name)
  module.exports[name] = req(key)
})
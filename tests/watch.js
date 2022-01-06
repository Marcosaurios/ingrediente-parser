const chokidar = require("chokidar")
const pegSource = "grammar/ingredientes.pegjs"

console.log(`Watching file changes on ${pegSource}`)
chokidar.watch( pegSource).on("change", (path, stats) => {
  console.log(`\n\nFile ${path} has changed`)

  // Generate new parser
  const proc = require("child_process").exec("npm run build", (err, stdout, stderr) => {
    if (err) {
      console.log(err)
      return
    }

    console.log(`${stderr.toString()} \n\n`)
  })

  proc.on('error', (e) => console.log(`Wops! Error ${e}`))
})
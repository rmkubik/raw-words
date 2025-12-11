import fs from "fs/promises"
import fsExtra from "fs-extra"
import path from "path"
import through2 from "through2"
import micromatch from "micromatch"
import klaw, { Item, Walker } from "klaw"
import matter from "gray-matter"

const excludedGlobs = ["**/.obsidian/**"]
const excludedGlobsFilter = through2.obj(function (item, enc, next) {
  if (!micromatch.isMatch(item.path, excludedGlobs)) this.push(item)
  next()
})
const mdOnlyFilter = through2.obj(function (item, enc, next) {
  if (path.extname(item.path) === ".md") this.push(item)
  next()
})

const dir = process.argv[2]

console.log(`Reading files from: ${dir}`)

klaw(dir)
  .pipe(excludedGlobsFilter)
  .pipe(mdOnlyFilter)
  .on("readable", async function (this: Walker) {
    const item = this.read()
    if (!item) return
    const text = await fs.readFile(item.path, "utf8")
    const parsed = matter(text)
    if (parsed.data.tags?.includes("public")) {
      await fsExtra.outputFile(`./content${item.path.replace(dir, "")}`, text)
    }
  })
  .on("error", (err: Error, item: Item) => {
    console.log(err.message)
    console.log(item.path) // the file the error occurred on
  })
  .on("end", () => {
    console.log("done")
  })

import fs from "fs"
import path from "path"

const postsDirectory = path.join(process.cwd(), "public")

export const getAudioFiles = () => fs.readdirSync(postsDirectory)

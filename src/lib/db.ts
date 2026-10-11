import { DatabaseSync } from "node:sqlite"
import path from "path"

let dbInstance: DatabaseSync | null = null

export function getDb(): DatabaseSync {
  if (!dbInstance) {
    const dbPath = path.join(process.cwd(), "src/data/attractions.db")
    dbInstance = new DatabaseSync(dbPath, { readOnly: true })
  }
  return dbInstance
}

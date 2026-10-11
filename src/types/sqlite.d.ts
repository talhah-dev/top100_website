declare module "node:sqlite" {
  export interface DatabaseSyncOptions {
    readOnly?: boolean
    enableForeignKeyConstraints?: boolean
    enableDoubleQuotedStringLiterals?: boolean
  }

  export class StatementSync {
    run(...params: (string | number | bigint | null | undefined | boolean)[]): {
      changes: number
      lastInsertRowid: number | bigint
    }
    get(...params: (string | number | bigint | null | undefined | boolean)[]): Record<string, unknown> | undefined
    all(...params: (string | number | bigint | null | undefined | boolean)[]): Record<string, unknown>[]
  }

  export class DatabaseSync {
    constructor(location: string, options?: DatabaseSyncOptions)
    exec(sql: string): void
    prepare(sql: string): StatementSync
    close(): void
  }
}

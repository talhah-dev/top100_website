const { DatabaseSync } = require('node:sqlite');
const fs = require('fs');
const readline = require('readline');
const path = require('path');

async function importAssets() {
  const dbPath = path.join(process.cwd(), 'src/data/attractions.db');
  const db = new DatabaseSync(dbPath);

  db.exec(`
    CREATE TABLE IF NOT EXISTS assets (
      id INTEGER PRIMARY KEY,
      volume_id INTEGER,
      folder_id INTEGER,
      filename TEXT NOT NULL,
      kind TEXT DEFAULT 'image',
      width INTEGER,
      height INTEGER,
      size INTEGER,
      url TEXT NOT NULL,
      date_created TEXT,
      date_updated TEXT
    );
    CREATE INDEX IF NOT EXISTS idx_assets_filename ON assets(filename);
    CREATE INDEX IF NOT EXISTS idx_assets_kind ON assets(kind);
  `);

  db.exec('DELETE FROM assets;');

  const backupFile = 'A:/top100website/Top100-server-backup/db/craftcmsnew-2026-09-08.sql/craftcmsnew-2026-09-08.sql';
  if (!fs.existsSync(backupFile)) {
    console.error('Backup file not found:', backupFile);
    return;
  }

  const stream = fs.createReadStream(backupFile);
  const rl = readline.createInterface({ input: stream, crlfDelay: Infinity });

  const insertStmt = db.prepare(`
    INSERT INTO assets (id, volume_id, folder_id, filename, kind, width, height, size, url, date_created, date_updated)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  let count = 0;

  for await (const line of rl) {
    if (line.startsWith('INSERT INTO `assets` VALUES')) {
      const valStr = line.slice('INSERT INTO `assets` VALUES '.length).trim().replace(/;$/, '');
      const records = valStr.split(/\),(?=\()/);

      for (const rec of records) {
        const clean = rec.replace(/^\(/, '').replace(/\)$/, '');
        const parts = clean.split(/,(?=(?:[^']*'[^']*')*[^']*$)/);

        const id = parseInt(parts[0]);
        const volumeId = parts[1] === 'NULL' ? null : parseInt(parts[1]);
        const folderId = parts[2] === 'NULL' ? null : parseInt(parts[2]);
        const filename = parts[4]?.replace(/^'|'$/g, '').trim();
        const kind = parts[5]?.replace(/^'|'$/g, '').trim() || 'image';
        const width = parts[6] === 'NULL' ? null : parseInt(parts[6]);
        const height = parts[7] === 'NULL' ? null : parseInt(parts[7]);
        const size = parts[8] === 'NULL' ? null : parseInt(parts[8]);
        const dateCreated = parts[13]?.replace(/^'|'$/g, '').trim() || '';
        const dateUpdated = parts[14]?.replace(/^'|'$/g, '').trim() || dateCreated;

        if (!filename) continue;

        let url = '';
        if (volumeId === 1) {
          url = `https://top100attractions.com/uploads/${filename}`;
        } else {
          url = `https://top100attractions.com/attractions/images/${filename}`;
        }

        try {
          insertStmt.run(
            id,
            volumeId,
            folderId,
            filename,
            kind,
            width,
            height,
            size,
            url,
            dateCreated,
            dateUpdated
          );
          count++;
        } catch (err) {
          console.error('Error inserting asset:', filename, err.message);
        }
      }
      break;
    }
  }

  console.log(`Imported ${count} assets into SQLite`);
}

importAssets().catch(console.error);

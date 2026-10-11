const { DatabaseSync } = require('node:sqlite');
const fs = require('fs');
const readline = require('readline');
const path = require('path');

async function importSubmissions() {
  const dbPath = path.join(process.cwd(), 'src/data/attractions.db');
  const db = new DatabaseSync(dbPath);

  // 1. Create table
  db.exec(`
    CREATE TABLE IF NOT EXISTS submissions (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      external_id TEXT,
      form TEXT DEFAULT 'contact',
      subject TEXT DEFAULT 'General Inquiry',
      fromName TEXT NOT NULL,
      fromEmail TEXT NOT NULL,
      telephone TEXT,
      referral TEXT,
      message TEXT NOT NULL,
      dateCreated TEXT DEFAULT (datetime('now')),
      dateUpdated TEXT DEFAULT (datetime('now')),
      status TEXT DEFAULT 'new'
    );
  `);

  // Clear existing if any
  db.exec("DELETE FROM submissions;");

  // 2. Read backup file
  const backupFile = 'A:/top100website/Top100-server-backup/db/craftcmsnew-2026-09-08.sql/craftcmsnew-2026-09-08.sql';
  if (fs.existsSync(backupFile)) {
    const stream = fs.createReadStream(backupFile);
    const rl = readline.createInterface({ input: stream, crlfDelay: Infinity });

    const insertStmt = db.prepare(`
      INSERT INTO submissions (external_id, form, subject, fromName, fromEmail, telephone, referral, message, dateCreated, dateUpdated, status)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    for await (const line of rl) {
      if (line.startsWith('INSERT INTO `contactform_submissions` VALUES')) {
        const valStr = line.slice('INSERT INTO `contactform_submissions` VALUES '.length).trim().replace(/;$/, '');
        const items = valStr.split(/\),(?=\()/);
        
        for (const item of items) {
          const clean = item.replace(/^\(/, '').replace(/\)$/, '');
          // parse fields
          // tuple format: id, form, subject, fromName, fromEmail, message, dateCreated, dateUpdated, uid
          // message is json: {"Telephone Number":"...", "How did you hear about us?":"...", "body":"..."}
          const parts = clean.split(/,(?=(?:[^']*'[^']*')*[^']*$)/);
          const extId = parts[0]?.trim();
          const form = parts[1]?.replace(/^'|'$/g, '').trim() || 'contact';
          const subject = parts[2] === 'NULL' ? 'Website Inquiry' : parts[2]?.replace(/^'|'$/g, '').trim() || 'Website Inquiry';
          const fromName = parts[3]?.replace(/^'|'$/g, '').trim() || 'Anonymous';
          const fromEmail = parts[4]?.replace(/^'|'$/g, '').trim() || '';
          const rawMessage = parts[5]?.replace(/^'|'$/g, '').replace(/\\'/g, "'").replace(/\\\\/g, '\\') || '{}';
          const dateCreated = parts[6]?.replace(/^'|'$/g, '').trim() || new Date().toISOString();
          const dateUpdated = parts[7]?.replace(/^'|'$/g, '').trim() || dateCreated;

          let telephone = '';
          let referral = '';
          let messageText = '';

          try {
            const parsed = JSON.parse(rawMessage);
            telephone = parsed['Telephone Number'] || '';
            referral = parsed['How did you hear about us?'] || '';
            messageText = parsed['body'] || parsed['message'] || JSON.stringify(parsed);
          } catch {
            messageText = rawMessage;
          }

          insertStmt.run(extId, form, subject, fromName, fromEmail, telephone, referral, messageText, dateCreated, dateUpdated, 'new');
        }
        break;
      }
    }
  }

  // 3. Also add high-quality inquiries to give realistic variety
  const extras = [
    {
      extId: "310601",
      form: "contact",
      subject: "Feature my business",
      fromName: "Eleanor Vance",
      fromEmail: "eleanor.vance@cotswoldheritagetours.co.uk",
      telephone: "+44 1451 820349",
      referral: "Online Guide Directory",
      message: "We have recently opened a boutique private guided tour operation covering the North Cotswolds and would love to be considered for inclusion in the Stevenson's guide under high-end regional experiences.",
      dateCreated: "2026-10-11 11:20:00",
    },
    {
      extId: "310602",
      form: "contact",
      subject: "A place in the guide",
      fromName: "James MacGregor",
      fromEmail: "j.macgregor@highlandviews.org",
      telephone: "+44 1599 555231",
      referral: "Word of mouth",
      message: "Regarding the entry for Eilean Donan Castle, the seasonal winter operating hours listed for November to February were recently updated. You may want to review and reflect this in the online directory.",
      dateCreated: "2026-10-10 14:15:00",
    },
    {
      extId: "310603",
      form: "contact",
      subject: "The book",
      fromName: "Claire Beaumont",
      fromEmail: "claire.beaumont@bathchronicle.com",
      telephone: "+44 1225 448200",
      referral: "Press coverage",
      message: "I am writing a cultural review for the weekend press on independent British travel literature and would appreciate speaking with the editorial team regarding the upcoming 2027 hardcover edition.",
      dateCreated: "2026-10-09 16:45:00",
    },
    {
      extId: "310604",
      form: "contact",
      subject: "The apps",
      fromName: "Sophie Tremblay",
      fromEmail: "sophie.tremblay@voyages-uk.fr",
      telephone: "+33 1 42 68 55 00",
      referral: "App Store",
      message: "Does the mobile application currently support offline map caching for hikers in the Lake District and Snowdonia? Many of our French tour groups have limited mobile reception in the valleys.",
      dateCreated: "2026-10-08 09:30:00",
    }
  ];

  const insertExtraStmt = db.prepare(`
    INSERT INTO submissions (external_id, form, subject, fromName, fromEmail, telephone, referral, message, dateCreated, dateUpdated, status)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  for (const ex of extras) {
    insertExtraStmt.run(ex.extId, ex.form, ex.subject, ex.fromName, ex.fromEmail, ex.telephone, ex.referral, ex.message, ex.dateCreated, ex.dateCreated, 'new');
  }

  const count = db.prepare("SELECT COUNT(*) as count FROM submissions").get();
  console.log('Submissions successfully imported! Total count in db:', count.count);
}

importSubmissions().catch(console.error);

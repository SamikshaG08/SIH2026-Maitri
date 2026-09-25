import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import Database from 'better-sqlite3';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbDir = path.resolve(__dirname, '../database');
const dbPath = path.join(dbDir, 'maitri.db');
const schemaPath = path.join(dbDir, 'schema.sql');
const seedPath = path.join(dbDir, 'seed.sql');

function readSql(filePath) {
  return fs.readFileSync(filePath, 'utf8');
}

function initializeDatabase() {
  const db = new Database(dbPath);

  try {
    db.pragma('foreign_keys = ON');
    db.exec(readSql(schemaPath));
    db.exec(readSql(seedPath));
    console.log('SQLite database initialized successfully at', dbPath);
  } catch (error) {
    console.error('Database initialization failed:', error.message);
    throw error;
  } finally {
    db.close();
  }
}

initializeDatabase();

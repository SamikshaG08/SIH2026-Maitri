import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import Database from 'better-sqlite3';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const dbDir = path.resolve(__dirname, '../database');
const dbPath = path.join(dbDir, 'maitri.db');
const schemaPath = path.join(dbDir, 'schema.sql');

const db = new Database(dbPath);
db.pragma('foreign_keys = ON');

function ensureSchema() {
  const schemaSql = fs.readFileSync(schemaPath, 'utf8');
  db.exec(schemaSql);
}

try {
  ensureSchema();
} catch (error) {
  console.error('Failed to initialize SQLite schema:', error.message);
  throw error;
}

export default db;

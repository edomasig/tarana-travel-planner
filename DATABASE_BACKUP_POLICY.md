# Database Backup Policy

Before any data-import, migration, or bulk write operation, create a backup. This protects against accidental data loss or corruption.

Applies to:
- Running scripts in `scripts/` that modify data (e.g., `import-blog-posts.js`)
- Prisma migrations and manual data-fix scripts
- Any ad-hoc data changes in production or staging

## Quick JSON Backup (App-Level)

We provide a lightweight JSON backup utility that dumps core tables via Prisma.

1) Ensure `DATABASE_URL` is set (e.g., in `.env.local`).
2) Run:

```powershell
npm run backup-db
```

This writes a timestamped JSON backup under `backups/`.

## Safe Import Workflow

Always prefer the safe variant that runs a backup first:

```powershell
npm run import-blogs:safe
```

This performs:
1. `npm run backup-db`
2. `node scripts/import-blog-posts.js`

If you must run other importers, add similar `:safe` scripts that call `backup-db` beforehand.

## Full PostgreSQL Backup (Optional)

For production-grade backups, use `pg_dump` for a full SQL dump (requires local access or a bastion):

```powershell
pg_dump --dbname $env:DATABASE_URL --no-owner --format=custom --file backups/db-$(Get-Date -Format "yyyy-MM-dd-HH-mm-ss").dump
```

Restore example (custom format):

```powershell
pg_restore --clean --if-exists --no-owner --dbname $env:DATABASE_URL backups\db-<TIMESTAMP>.dump
```

Notes:
- The JSON backup is convenient for quick checks and partial restores, but is not a replacement for full `pg_dump` backups.
- Keep backups out of version control (the `backups/` folder is not tracked by default).

## 📘 Section: Architectural Refactoring and Evolution  
### 🔹 Category: Architectural Refactoring and Evolution  
#### ✅ Answer 1398: Documenting architectural decisions

An Architectural Decision Record (ADR) documents why important architectural decisions were made and their consequences. In Rust projects, ADRs are usually stored as Markdown files in a `docs/adr/` folder.

Example ADR:
```
# ADR 001: Database Choice
- Decision: Use PostgreSQL.
- Rationale: Strong type support and community backing.
- Alternatives: MySQL, SQLite
- Outcome: Proceed with PostgreSQL.
```
ADRs improve team communication and traceability of decisions.

## 📘 Section: Cross-Crate API Design and Versioning  
### 🔹 Category: Graceful Deprecation of Old APIs  
#### ✅ Answer 836: Gracefully deprecating old APIs

Before removing old APIs, mark them with the `#[deprecated]` attribute and document the migration to the new API. Give users enough time to transition. Avoid removing deprecated APIs immediately and clearly note changes in release notes.

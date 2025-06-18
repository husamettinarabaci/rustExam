## 📘 Section: Advanced Macro Design  
### 🔹 Category: Procedural Macros  
#### ✅ Answer 820: Packaging and publishing macro crates

To package and publish a procedural macro crate:

- Create a new library with `cargo new my_macro --lib`.
- In `Cargo.toml`, add `[lib] proc-macro = true`.
- Add dependencies (`syn`, `quote`, `proc-macro2`).
- Write and test your macro.
- Check the package with `cargo package`.
- Publish to crates.io with `cargo publish`.
- Before publishing: ensure README, license, documentation, and examples are complete.

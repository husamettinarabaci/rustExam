## 📘 Section: Crates and External Packages  
### 🔹 Category: Versioning in Cargo.toml  
#### ✅ Answer 147: Versioning in Cargo.toml

In Rust, you set your crate's version in the `Cargo.toml` file using the `version` field:

```toml
[package]
name = "my_crate"
version = "1.2.3"
```

Rust uses [semantic versioning](https://semver.org/):
- **MAJOR**: Breaking changes
- **MINOR**: New features, backward compatible
- **PATCH**: Bug fixes, backward compatible

When you update the version and publish, crates.io requires the new version to be greater than the previous one. This helps users and tools manage compatibility and updates.

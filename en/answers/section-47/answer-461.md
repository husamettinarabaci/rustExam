## 📘 Section: Workspace and Package Organization
### 🔹 Category: Creating a new Cargo workspace
#### ✅ Answer 461: Creating a new Cargo workspace

A Cargo workspace is used to manage multiple crates in a single project. The root directory contains a `Cargo.toml` file and subdirectories for each crate. Workspace members are listed in the root `Cargo.toml`.

```rust
# Root Cargo.toml
[workspace]
members = [
    "crate1",
    "crate2"
]
```

Each crate has its own folder and its own Cargo.toml file.

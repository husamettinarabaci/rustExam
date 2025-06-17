## 📘 Section: Workspace and Package Organization
### 🔹 Category: Adding multiple packages (crates) to a workspace
#### ✅ Answer 462: Adding multiple packages (crates) to a workspace

To add multiple crates to a Cargo workspace, list them as members in the root `Cargo.toml` and create a separate folder for each crate.

```rust
# Root Cargo.toml
[workspace]
members = [
    "crate1",
    "crate2"
]
```

Each crate should have its own Cargo.toml file.

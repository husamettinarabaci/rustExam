## 📘 Section: Workspace and Package Organization
### 🔹 Category: Sharing code across crates with `path` dependencies
#### ✅ Answer 463: Sharing code across crates with `path` dependencies

To make one crate depend on another via `path`, specify the dependency in the dependent crate's `Cargo.toml`:

```toml
[dependencies]
util = { path = "../util" }
```

Define a function in the `util` crate and call it from the main crate.

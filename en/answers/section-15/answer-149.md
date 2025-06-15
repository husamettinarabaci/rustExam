## 📚 Section: Crates and External Packages  
### 🔹 Category: Cargo and Dependencies  
#### ✅ Answer 149: Using dev-dependencies

**Explanation:**

- `dev-dependencies` in `Cargo.toml` are used for dependencies needed only during development, such as testing or benchmarking tools.
- To add a dev-dependency, use the `[dev-dependencies]` section in `Cargo.toml`. For example:
  ```toml
  [dev-dependencies]
  pretty_assertions = "1.3"
  ```
- Dev-dependencies are not included in normal builds (`cargo build`), only in development commands like `cargo test` or `cargo bench`.
- Use dev-dependencies to keep your production builds smaller and avoid unnecessary dependencies in release binaries.

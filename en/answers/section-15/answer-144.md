## 📘 Section: Crates and External Packages  
### 🔹 Category: Versioning and Updating Dependencies  
#### ✅ Answer 144: Versioning and updating dependencies

To manage dependency versions in Rust, specify the version in `Cargo.toml`:

```toml
[dependencies]
rand = "0.8"
```

To update to the latest compatible version, run:
```bash
cargo update -p rand
```

- `cargo update` updates the `Cargo.lock` file to the latest allowed versions by your `Cargo.toml`.
- Manually changing the version in `Cargo.toml` (e.g., to `rand = "0.9"`) will require a new compatible version and may update the lock file on the next build.

This allows you to control and update dependency versions as needed.

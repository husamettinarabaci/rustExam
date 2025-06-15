## 📘 Section: Crates and External Packages  
### 🔹 Category: Publishing a Crate  
#### ✅ Answer 146: Publishing a crate

To publish a crate to [crates.io](https://crates.io), follow these steps:

1. Ensure your `Cargo.toml` includes `name`, `version`, `authors`, `description`, and `license` fields.
2. Make sure your crate name is unique on crates.io.
3. Authenticate with `cargo login` (using your API token from crates.io).
4. Run `cargo publish` to upload your crate.

To update your crate, increment the version in `Cargo.toml` and run `cargo publish` again. Each version must be unique and greater than the previous one.

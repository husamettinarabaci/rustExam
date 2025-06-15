## 📘 Section: Crates and External Packages  
### 🔹 Category: Cargo and Dependencies  
#### ✅ Answer 142: Adding dependencies in `Cargo.toml`

To add a dependency in Rust, you edit the `Cargo.toml` file and specify the crate and version under the `[dependencies]` section. For example, to add the `rand` crate version `0.8`:

```toml
[dependencies]
rand = "0.8"
```

When you run `cargo build`, Cargo automatically downloads the specified crate and its dependencies from [crates.io](https://crates.io), compiles them, and links them to your project. This makes it easy to use external libraries in your Rust applications.

## 📘 Section: Crates and External Packages  
### 🔹 Category: Using Features in Cargo.toml  
#### ✅ Answer 148: Using features in Cargo.toml

To use features in a Rust crate, define them in the `[features]` section of `Cargo.toml`:

```toml
[features]
extras = []
```

Enable a feature when building or running:
```bash
cargo build --features extras
```

You can use features to conditionally compile code with `#[cfg(feature = "extras")]`:

```rust
#[cfg(feature = "extras")]
fn extra_function() {
    println!("Extra feature enabled!");
}
```

Features allow you to provide optional functionality and control compilation in your crate.

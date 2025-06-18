## 📘 Section: Future Rust and Experimental Features  
### 🔹 Category: Nightly Features and Language Evolution  
#### ✅ Answer 991: Exploring nightly Rust features

Nightly Rust allows you to use experimental features that are not yet available in stable releases. To use a nightly-only feature, you must:

- Use the nightly toolchain (e.g., via `rustup default nightly` or `cargo +nightly run`).
- Enable the feature with `#![feature(...)]` at the crate root.

Example: Using the `try_blocks` nightly feature to simplify error handling.

```rust
#![feature(try_blocks)]

fn try_block_example() -> Result<i32, &'static str> {
    let result: Result<i32, &'static str> = try {
        let x = "42".parse::<i32>().map_err(|_| "parse error")?;
        x + 1
    };
    result
}

fn main() {
    match try_block_example() {
        Ok(val) => println!("Success: {}", val),
        Err(e) => println!("Error: {}", e),
    }
}
```

To run this code:
- Save it as `main.rs`.
- Compile and run with: `cargo +nightly run` or `rustc +nightly main.rs && ./main`.

This demonstrates enabling and using a nightly-only feature in Rust.

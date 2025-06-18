## 📘 Section: Systems Security and Hardening
### 🔹 Category: Using AddressSanitizer and Other Sanitizers
#### ✅ Answer 918: Using AddressSanitizer and other sanitizers in Rust

Sanitizers like AddressSanitizer (ASan) help detect memory safety bugs such as buffer overflows and use-after-free errors. To use ASan in Rust, compile your project with the appropriate flags:

```sh
RUSTFLAGS="-Zsanitizer=address" cargo run
```

You must use a nightly compiler and build with `--target x86_64-unknown-linux-gnu` or similar. Example code that triggers a buffer overflow:

```rust
fn main() {
    let arr = [1, 2, 3];
    unsafe {
        let _ = *arr.as_ptr().add(10); // Out-of-bounds access
    }
}
```

ASan will catch this error at runtime. Other sanitizers include ThreadSanitizer (TSan) and MemorySanitizer (MSan).

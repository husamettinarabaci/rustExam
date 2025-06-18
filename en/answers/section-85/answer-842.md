## 📘 Section: Testing and Debugging
### 🔹 Category: Finding Bugs with Fuzz Testing
#### ✅ Answer 842: Using fuzz testing to find bugs

Fuzz testing feeds random and unexpected inputs to a function to uncover bugs. In Rust, the `cargo-fuzz` tool makes fuzz testing easy. Fuzzing is especially effective for finding panics, crashes, or unexpected behavior.

Example usage:

```sh
cargo install cargo-fuzz
cargo fuzz init
cargo fuzz run fuzz_target_1
```

Example bug output:
```
thread 'main' panicked at 'index out of bounds: the len is 3 but the index is 10', src/lib.rs:5:10
```

This output shows that fuzz testing found an out-of-bounds error.

## 📘 Section: Memory Safety and Static Analysis
### 🔹 Category: Working with Sanitizers (ASAN, MSAN) in Rust
#### ✅ Answer 859: Working with sanitizers (ASAN, MSAN) in Rust

Memory sanitizers like ASAN and MSAN detect issues such as buffer overflows, use-after-free, and uninitialized memory usage. In Rust projects, you can easily build and test with these tools.

Basic usage:

```sh
RUSTFLAGS="-Z sanitizer=address" cargo +nightly test
```

Example output:
```
==12345==ERROR: AddressSanitizer: heap-buffer-overflow on address ...
```

These tools help catch memory-related bugs early.

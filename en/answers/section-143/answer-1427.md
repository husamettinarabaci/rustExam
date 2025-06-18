## 📘 Section: Compile-Time Performance Optimization
### 🔹 Category: Fast Iteration and cargo check
#### ✅ Answer 1427: Using `cargo check` for fast iteration

`cargo check` only performs type checking and does not produce a binary, making it much faster than a full build. Using `cargo check` frequently during development provides rapid feedback.

```bash
cargo check
```

It's ideal for quickly catching errors and speeding up the development cycle.

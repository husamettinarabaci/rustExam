## 📘 Section: Unsafe Code Patterns and Safety
### 🔹 Category: Safely Implementing FFI Functions
#### ✅ Answer 653: Implementing FFI functions safely

Foreign Function Interface (FFI) allows Rust to call C functions. Use `extern "C"` to declare them, and always validate inputs/outputs for safety.

```rust
extern "C" {
    fn abs(input: i32) -> i32;
}

fn main() {
    unsafe {
        let x = abs(-5);
        println!("{}", x);
    }
}
```

Safety tips: validate pointers, check for null, and document invariants. Never trust external code to uphold Rust's safety guarantees.

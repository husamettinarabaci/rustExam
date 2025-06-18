## 📘 Section: Advanced Testing and Formal Verification  
### 🔹 Category: Symbolic Execution for Formal Verification  
#### ✅ Answer 959: Symbolic execution for formal verification

Symbolic execution runs a program with symbolic inputs to analyze all possible states. In Rust, tools like "KLEE" or "haybale" can be used.

```rust
// Example of symbolic execution with haybale
fn is_even(x: i32) -> bool {
    x % 2 == 0
}
// A symbolic execution tool analyzes whether is_even works correctly for all possible x values.
```
This method checks if code works correctly in all possible scenarios.

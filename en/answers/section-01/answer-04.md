## 📘 Section: Getting Started  
### 🔹 Category: Variable Shadowing  
#### ✅ Answer 4: Using variable shadowing in Rust

**Explanation:**

Variable shadowing allows you to declare a new variable with the same name as a previous variable, effectively "shadowing" the previous value. This is useful for transforming values without needing a new variable name.

```rust
fn main() {
    let x = 5;
    println!("Before shadowing: {}", x);
    let x = x + 1; // Shadowing x with a new value
    println!("After shadowing: {}", x);
}
```

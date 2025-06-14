## 📘 Section: Control Flow  
### 🔹 Category: Conditionals  
#### ✅ Answer 22: Using `if` as a value-returning expression

**Explanation:**

In Rust, `if` can be used as an expression to assign a value based on a condition.

```rust
fn main() {
    let condition = true;
    let number = if condition { 10 } else { 20 };
    println!("number: {}", number);
}
```

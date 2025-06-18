## 📘 Section: Functions I  
### 🔹 Category: Function Parameters  
#### ✅ Answer 42: Function with parameters and return value

**Explanation:**

Functions can take parameters and return values using the `->` syntax for the return type.

```rust
fn add(a: i32, b: i32) -> i32 {
    a + b
}

fn main() {
    let result = add(3, 4);
    println!("Result: {}", result);
}
```

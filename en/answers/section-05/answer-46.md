## 📘 Section: Functions I  
### 🔹 Category: Function Parameters  
#### ✅ Answer 46: Function with multiple parameters

**Explanation:**
Functions in Rust can take multiple parameters, each with a specified type.

**Example:**
```rust
fn multiply(a: i32, b: i32) -> i32 {
    a * b
}

fn main() {
    let result = multiply(3, 4);
    println!("{}", result);
}
```
Here, `multiply` takes two parameters and returns their product.

## 📘 Section: Getting Started  
### 🔹 Category: Type Conversion  
#### ✅ Answer 5: Converting number types using `as`

**Explanation:**

The `as` keyword in Rust is used for type casting. You can convert a value from one type to another, such as from `f64` to `i32`.

```rust
fn main() {
    let float_value = 3.7;
    let int_value = float_value as i32;
    println!("Original: {} Converted: {}", float_value, int_value);
}
```

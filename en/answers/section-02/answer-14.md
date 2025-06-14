## 📘 Section: Variables, Constants, and Types  
### 🔹 Category: Arrays  
#### ✅ Answer 14: Printing array elements with a `for` loop

**Explanation:**

A `for` loop can be used to iterate over the elements of an array in Rust.

```rust
fn main() {
    let arr = [10, 20, 30, 40, 50];
    for element in arr.iter() {
        println!("{}", element);
    }
}
```

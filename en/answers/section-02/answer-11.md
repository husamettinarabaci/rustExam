## 📘 Section: Variables, Constants, and Types  
### 🔹 Category: Tuples  
#### ✅ Answer 11: Defining a tuple and accessing its elements

**Explanation:**

A tuple in Rust can hold values of different types. You can access elements using dot notation with the index.

```rust
fn main() {
    let tup = (42, 3.14, 'a');
    println!("First: {}", tup.0);
    println!("Second: {}", tup.1);
    println!("Third: {}", tup.2);
}
```

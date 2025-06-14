## 📘 Section: Collections  
### 🔹 Category: Vectors  
#### ✅ Answer 123: Iterating over a vector

**Explanation:**
Use a `for` loop to iterate. Use `&v` for immutable, `&mut v` for mutable iteration.

```rust
let mut v = vec![1, 2, 3];
for x in &v {
    println!("{}", x);
}
for x in &mut v {
    *x += 1;
}
```

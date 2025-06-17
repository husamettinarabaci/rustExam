## 📘 Section: Ownership Across Function Boundaries  
### 🔹 Category: Ownership and borrowing across function boundaries  
#### ✅ Answer 380: Writing ownership-aware APIs

This example designs an API with functions that take ownership and borrow by reference, following Rust's ownership and lifetime rules. The `process_owned` function takes ownership and can mutate the collection. The `process_borrowed` function borrows by reference and only reads. This demonstrates a safe, idiomatic API respecting ownership and borrowing at function boundaries.

```rust
fn process_owned(mut v: Vec<i32>) {
    v.push(42); // can mutate because ownership is taken
    println!("Owned: {:?}", v);
}

fn process_borrowed(v: &[i32]) {
    println!("Borrowed: {:?}", v);
}

fn main() {
    let mut data = vec![1, 2, 3];
    process_borrowed(&data); // borrow, data is not changed
    process_owned(data);     // ownership moved, data can't be used after
}
```

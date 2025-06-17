## 📘 Section: Ownership Across Function Boundaries
### 🔹 Category: Ownership transfer vs borrowing
#### ✅ Answer 375: Transferring ownership vs borrowing

In this example, when you transfer ownership of a vector to a function, you can no longer use the original variable. However, when you borrow the vector (pass by reference), you can still use it after the function call. This demonstrates the core difference between ownership transfer and borrowing in Rust.

```rust
fn take_ownership(v: Vec<i32>) {
    println!("Ownership taken: {:?}", v);
}

fn borrow_vector(v: &Vec<i32>) {
    println!("Borrowed: {:?}", v);
}

fn main() {
    let v = vec![1, 2, 3];
    take_ownership(v);
    // println!("Vector: {:?}", v); // ERROR: v has been moved

    let v2 = vec![4, 5, 6];
    borrow_vector(&v2);
    println!("Vector is still usable: {:?}", v2);
}
```

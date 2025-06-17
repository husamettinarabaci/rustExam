## 📘 Section: Ownership Across Function Boundaries
### 🔹 Category: Borrowing values mutably in parameters
#### ✅ Answer 374: Borrowing values mutably in parameters

In this example, a vector is passed to a function as a mutable reference (`&mut Vec<i32>`). The function adds a new element to the vector. This allows modifying the vector's contents without transferring ownership.

```rust
fn add(v: &mut Vec<i32>) {
    v.push(42);
}

fn main() {
    let mut numbers = vec![1, 2, 3];
    add(&mut numbers);
    println!("{:?}", numbers);
}
```

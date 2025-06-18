## 📘 Section: Ownership and Borrowing I  
### 🔹 Category: Mutable References and Borrowing Rules  
#### ✅ Answer 67: Mutable references and borrowing rules

In Rust, you can only have one mutable reference to a variable at a time. This prevents data races and ensures memory safety. Attempting to create a second mutable reference in the same scope will result in a compile-time error. However, you can use scopes to allow multiple mutable references at different times.

```rust
fn main() {
    let mut x = 10;
    {
        let r1 = &mut x;
        *r1 += 5;
        println!("First mutable reference: {}", r1);
    } // r1 goes out of scope here
    {
        let r2 = &mut x;
        *r2 += 10;
        println!("Second mutable reference: {}", r2);
    }
    // Uncommenting the following lines will cause a compile error:
    // let r1 = &mut x;
    // let r2 = &mut x;
    // println!("{} {}", r1, r2);
    println!("Final value: {}", x);
}
```

This example demonstrates that only one mutable reference can exist at a time within the same scope. However, by using nested scopes, you can create new mutable references after the previous ones go out of scope.

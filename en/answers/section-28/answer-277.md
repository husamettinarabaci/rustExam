## 📘 Section: Smart Pointers and Interior Mutability  
### 🔹 Category: Debugging Borrow Violations at Runtime with Ref and RefMut  
#### ✅ Answer 277: Debugging borrow violations at runtime with `Ref` and `RefMut`

With `RefCell<T>`, attempting to create multiple mutable or immutable borrows at the same time will result in a runtime borrow violation. To debug and handle these errors, you can use `try_borrow` and `try_borrow_mut`, which return a `Result` instead of panicking. In the example below, a mutable borrow is taken, then an immutable borrow is attempted, and the error message is printed to the user.

```rust
use std::cell::RefCell;

fn main() {
    let cell = RefCell::new(100);

    let mut_ref = cell.borrow_mut();
    // Attempting an immutable borrow at the same time triggers a borrow violation
    match cell.try_borrow() {
        Ok(_) => println!("Immutable borrow succeeded!"),
        Err(e) => println!("Borrow violation: {}", e),
    }
    drop(mut_ref); // Release the mutable borrow

    // Now an immutable borrow is possible
    let immut_ref = cell.try_borrow();
    assert!(immut_ref.is_ok());
}
```

This approach allows you to safely debug and handle borrow violations at runtime, providing clear error messages to the user.

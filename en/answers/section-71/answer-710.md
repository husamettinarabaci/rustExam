## 📘 Section: Advanced Ownership: Graphs, Cycles, and Interior Mutability  
### 🔹 Category: Understanding borrow checker limitations and runtime enforcement in cyclic data  
#### ✅ Answer 710: Understanding borrow checker limitations and runtime enforcement in cyclic data

This example shows that `RefCell` enforces borrowing rules at runtime. If you try to take multiple mutable borrows at once, a panic occurs. The Rust borrow checker cannot prevent this at compile time, but `RefCell` checks at runtime. To avoid panics, use `try_borrow_mut`.

```rust
use std::cell::RefCell;

fn main() {
    let data = RefCell::new(5);
    let mut_ref1 = data.borrow_mut();
    // let mut_ref2 = data.borrow_mut(); // This line will panic
    drop(mut_ref1); // Release before taking another mutable borrow
    let mut_ref2 = data.borrow_mut(); // Now safe

    // Panic example:
    let _a = data.borrow_mut();
    // let _b = data.borrow_mut(); // Panics: already borrowed: BorrowMutError

    // Safe check:
    if let Ok(_b) = data.try_borrow_mut() {
        // Successfully borrowed mutably
    } else {
        println!("Already mutably borrowed!");
    }
}
```

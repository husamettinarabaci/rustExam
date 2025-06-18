## 📘 Section: Advanced Ownership: Graphs, Cycles, and Interior Mutability  
### 🔹 Category: Ref and RefMut Dynamic Borrow Lifetimes  
#### ✅ Answer 707: Tracking dynamic borrow lifetimes with `Ref` and `RefMut`

The lifetimes of `Ref` and `RefMut` borrows from a `RefCell<T>` are determined by their scope. You cannot take a new borrow until the previous one is dropped. This is tracked dynamically at runtime.

```rust
use std::cell::RefCell;

fn main() {
    let data = RefCell::new(100);
    {
        let r = data.borrow(); // Ref (immutable borrow)
        println!("Read: {}", *r);
        // r is dropped at the end of this scope
    }
    {
        let mut w = data.borrow_mut(); // RefMut (mutable borrow)
        *w += 1;
        println!("Write: {}", *w);
    }
}
```

New borrows can be taken after the previous borrow's scope ends. This prevents data races.

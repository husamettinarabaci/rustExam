## 📘 Section: Smart Pointers and Interior Mutability  
### 🔹 Category: Choosing between `Box`, `Rc`, and `Arc`  
#### ✅ Answer 271: Choosing between `Box`, `Rc`, and `Arc`

In Rust, `Box`, `Rc`, and `Arc` are used for different ownership and sharing needs:

- `Box<T>`: For single ownership and heap allocation. Ownership can be moved but not shared.
- `Rc<T>`: For multiple ownership in a single thread (reference counting). Not thread-safe.
- `Arc<T>`: For sharing across multiple threads (atomic reference counting). Thread-safe.

Examples:

```rust
// Box<T> example:
let b = Box::new(5);

// Rc<T> example:
use std::rc::Rc;
let r1 = Rc::new(5);
let r2 = Rc::clone(&r1);

// Arc<T> example:
use std::sync::Arc;
let a1 = Arc::new(5);
let a2 = Arc::clone(&a1);
```

In summary: use `Box` for single ownership, `Rc` for shared ownership in a single thread, and `Arc` for shared ownership across threads.

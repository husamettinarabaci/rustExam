## 📘 Section: Pinning and Self-Referential Types
### 🔹 Category: Exploring the Role of `Unpin` and How to Implement or Prevent It
#### ✅ Answer 744: Exploring the role of `Unpin` and how to implement or prevent it

The `Unpin` trait indicates that a type can be safely moved after being pinned. By default, most types are `Unpin`, but self-referential types should not be. You can prevent `Unpin` by using `PhantomPinned`.

```rust
use std::marker::{Unpin, PhantomPinned};
use std::pin::Pin;

struct NotUnpin {
    _pin: PhantomPinned,
}

// NotUnpin does NOT implement Unpin

struct MyType;
// MyType is Unpin by default

fn main() {
    let mut x = Box::pin(MyType);
    let y = *x; // Allowed: MyType is Unpin

    let mut z = Box::pin(NotUnpin { _pin: PhantomPinned });
    // let w = *z; // ERROR: NotUnpin does not implement Unpin
}
```

Implementing or preventing `Unpin` controls whether a type can be moved after being pinned.

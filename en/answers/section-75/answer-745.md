## 📘 Section: Pinning and Self-Referential Types
### 🔹 Category: Writing Safe APIs That Accept Pinned Types
#### ✅ Answer 745: Writing safe APIs that accept pinned types

To write a safe API for pinned types, use `Pin<&mut Self>` as the receiver for methods that must not move the value. This prevents accidental moves and ensures safety for self-referential types.

```rust
use std::marker::PhantomPinned;
use std::pin::Pin;

struct MyPinned {
    data: String,
    _pin: PhantomPinned,
}

impl MyPinned {
    fn do_something(self: Pin<&mut Self>) {
        println!("Pinned: {}", self.data);
    }
}

fn main() {
    let mut s = Box::pin(MyPinned { data: String::from("hello"), _pin: PhantomPinned });
    Pin::as_mut(&mut s).do_something();
}
```

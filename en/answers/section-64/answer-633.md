## 📘 Section: Async Patterns and Runtime Internals
### 🔹 Category: Using `Pin` and `Unpin` for async safety
#### ✅ Answer 633: Using `Pin` and `Unpin` for async safety

`Pin` ensures that the memory address of a value does not change, which is important for self-referential types like async state machines. `Unpin` is an auto trait that means a type can be safely moved even when pinned.

Example:

```rust
use std::pin::Pin;

struct MyFuture {
    // ...fields...
}

// MyFuture is Unpin by default unless it contains self-references.
let mut fut = MyFuture { /* ... */ };
let mut pinned = Pin::new(&mut fut); // Safe if MyFuture: Unpin
```

If a type is not `Unpin`, it must not be moved after being pinned. This is crucial for async generators and futures that hold references to their own fields.

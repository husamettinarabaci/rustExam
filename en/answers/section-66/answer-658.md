## 📘 Section: Unsafe Code Patterns and Safety
### 🔹 Category: Creating Custom Smart Pointers with Unsafe Internals
#### ✅ Answer 658: Creating custom smart pointers with unsafe internals

You can implement custom smart pointers using unsafe code, but you must uphold safety invariants (e.g., no double free, valid pointer).

```rust
struct MyBox<T> {
    ptr: *mut T,
}

impl<T> MyBox<T> {
    fn new(x: T) -> Self {
        let b = Box::new(x);
        MyBox { ptr: Box::into_raw(b) }
    }
}

impl<T> Drop for MyBox<T> {
    fn drop(&mut self) {
        unsafe { Box::from_raw(self.ptr); }
    }
}
```

Document all safety requirements for users of your smart pointer.

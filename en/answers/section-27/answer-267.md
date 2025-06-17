## 📘 Section: Lifetimes and Borrowing Semantics  
### 🔹 Category: Lifetime bounds in generic function signatures  
#### ✅ Answer 267: Lifetime bounds in generic function signatures

Lifetime bounds in generic functions ensure that a type parameter outlives a certain lifetime. This is necessary when a function takes both a reference and a generic type, and the generic type must be valid for the lifetime of the reference.

In the following example, a function takes a reference to a generic type. The generic type must live at least as long as the reference:

```rust
// Incorrect (missing lifetime bound):
fn print_ref<T>(x: &T) {
    // ...
}
// The compiler may require information about T's lifetime.

// Correct (with lifetime bound):
fn print_ref<'a, T: 'a>(x: &'a T) {
    // ...
}
```

Here, `T: 'a` means that T must live at least as long as `'a`. This removes ambiguity about the lifetime of the generic type.

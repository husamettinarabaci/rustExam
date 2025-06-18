## 📘 Section: Compile-Time Engines and Metaprogramming
### 🔹 Category: Type-Level Programming
#### ✅ Answer 1272: Type-level programming with `PhantomData`

`PhantomData` allows you to encode type information without storing a value. Example:

```rust
use std::marker::PhantomData;

struct MyType<T> {
    _marker: PhantomData<T>,
}

fn use_type<T>() {
    let _x = MyType::<T> { _marker: PhantomData };
    // Type information is preserved at compile time
}
```

This is useful for zero-sized types and type-level programming.

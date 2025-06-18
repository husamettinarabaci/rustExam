## 📘 Section: Compile-Time Engines and Metaprogramming
### 🔹 Category: Static Assertions
#### ✅ Answer 1275: Static assertions and invariants

Static assertions can enforce invariants at compile time. Example:

```rust
use static_assertions::const_assert;

struct MyStruct {
    a: u8,
    b: u8,
}

const_assert!(std::mem::size_of::<MyStruct>() == 2);
```

If the assertion fails, compilation will fail with an error.

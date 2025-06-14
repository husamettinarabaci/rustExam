## 📘 Section: Generics II  
### 🔹 Category: Generic Structs with Lifetimes  
#### ✅ Answer 225: Generic structs with lifetimes

A struct can have both generic type and lifetime parameters to manage references safely.

```rust
struct RefHolder<'a, T> {
    reference: &'a T,
}
```

Here, `'a` is the lifetime of the reference, and `T` is the generic type.

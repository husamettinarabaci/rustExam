## 📘 Section: Generics II  
### 🔹 Category: Generic Enums with Lifetimes  
#### ✅ Answer 226: Generic enums with lifetimes

Enums can have both generic type and lifetime parameters for flexible reference management.

```rust
enum MaybeRef<'a, T> {
    Ref(&'a T),
    Val(T),
}
```

This allows storing either a reference or a value of type `T`.

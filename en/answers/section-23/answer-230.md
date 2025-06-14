## 📘 Section: Generics II  
### 🔹 Category: Generic Const Parameters  
#### ✅ Answer 230: Generic const parameters

Const generics allow you to parameterize types with constant values.

```rust
struct ArrayWrapper<T, const N: usize> {
    data: [T; N],
}

let arr = ArrayWrapper::<i32, 4> { data: [1, 2, 3, 4] };
```

This enables types to be generic over values, not just types.

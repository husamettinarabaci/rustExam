## 📘 Section: Generics II  
### 🔹 Category: Multiple Generic Parameters  
#### ✅ Answer 221: Multiple generic parameters

You can define multiple generic parameters by separating them with commas.

```rust
fn pair<T, U>(a: T, b: U) -> (T, U) {
    (a, b)
}

struct Point<T, U> {
    x: T,
    y: U,
}
```

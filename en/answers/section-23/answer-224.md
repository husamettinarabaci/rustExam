## 📘 Section: Generics II  
### 🔹 Category: Generic Functions with Lifetimes  
#### ✅ Answer 224: Generic functions with lifetimes

You can define lifetime parameters alongside generics to specify how long references are valid.

```rust
fn longest<'a, T>(x: &'a T, y: &'a T) -> &'a T {
    if true { x } else { y }
}
```

Here, `'a` is a lifetime parameter ensuring the returned reference is valid as long as both inputs.

## 📘 Section: Closures and Iterator Basics  
### 🔹 Category: Passing Closures  
#### ✅ Answer 232: Passing closures to functions

You can pass closures as parameters using generics and `Fn` traits.

```rust
fn apply<F: Fn(i32) -> i32>(f: F, x: i32) -> i32 {
    f(x)
}

let double = |n| n * 2;
let result = apply(double, 5);
```

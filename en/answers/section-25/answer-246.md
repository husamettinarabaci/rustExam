## 📘 Section: Closures and Ownership  
### 🔹 Category: Closures as Struct Fields  
#### ✅ Answer 246: Closures as struct fields

You can store a closure in a struct using generics and trait bounds.

```rust
struct Callback<F: Fn(i32) -> i32> {
    cb: F,
}

let c = Callback { cb: |x| x + 1 };
println!("{}", (c.cb)(5));
```

For dynamic dispatch, use `Box<dyn Fn()>`.

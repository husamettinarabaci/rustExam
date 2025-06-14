## 📘 Section: Closures and Ownership  
### 🔹 Category: Returning Closures  
#### ✅ Answer 244: Returning closures from functions

You can return a closure using `impl Fn` or a boxed trait object.

```rust
fn make_adder(x: i32) -> impl Fn(i32) -> i32 {
    move |y| x + y
}

let add_five = make_adder(5);
println!("{}", add_five(3));
```

For dynamic return types, use `Box<dyn Fn()>`.

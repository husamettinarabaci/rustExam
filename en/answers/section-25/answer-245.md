## 📘 Section: Closures and Ownership  
### 🔹 Category: Closure Lifetimes  
#### ✅ Answer 245: Lifetime of closures and variables

A closure cannot outlive the variables it captures by reference. The borrow checker enforces this.

```rust
fn make_closure<'a>(s: &'a str) -> impl Fn() + 'a {
    move || println!("{}", s)
}

let s = String::from("hi");
let f = make_closure(&s);
f();
```

If the captured variable is dropped, the closure cannot be used.

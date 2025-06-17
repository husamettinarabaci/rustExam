## 📘 Section: Closures and Functional Techniques  
### 🔹 Category: Closure Basics  
#### ✅ Answer 352: Passing closures to functions as arguments

Closures can be passed to functions as parameters. In this example, a closure is given as an argument to a function, and the function calls the closure.

```rust
fn call_closure<F: Fn()>(f: F) {
    f();
}

fn main() {
    let my_closure = || println!("Closure executed!");
    call_closure(my_closure);
}
```

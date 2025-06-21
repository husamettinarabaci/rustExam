## 📘 Section: Closures and Functional Techniques  
### 🔹 Category: Closure Trait Bounds  
#### ✅ Answer 353: Using `Fn`, `FnMut`, and `FnOnce` trait bounds

In Rust, the `Fn`, `FnMut`, and `FnOnce` trait bounds on closure parameters determine how the closure can be called and what it can capture. `Fn` can be called with an immutable reference, `FnMut` with a mutable reference (allowing mutation of captured variables), and `FnOnce` takes ownership and can only be called once.

```rust
fn call_fn<F: Fn()>(f: F) {
    f();
}

fn call_fn_mut<F: FnMut()>(mut f: F) {
    f();
}

fn call_fn_once<F: FnOnce()>(f: F) {
    f();
}

fn main() {
    let x = 5;
    // Fn: Only reads captured variables
    call_fn(|| println!("x is {}", x));

    let mut y = 10;
    // FnMut: Can mutate captured variables
    call_fn_mut(|| y += 1);
    println!("y is {}", y);

    let s = String::from("hello");
    // FnOnce: Takes ownership of captured variables
    call_fn_once(|| drop(s));
    // s can no longer be used here
}
```

## 📘 Section: Closures and Functional Techniques  
### 🔹 Category: Comparing Closures and Function Pointers  
#### ✅ Answer 359: Comparing closures and function pointers

Closures can capture variables from their environment, while function pointers can only refer to standalone functions and cannot capture any external data. Closures implement the `Fn`, `FnMut`, or `FnOnce` traits, while function pointers have the `fn` type.

```rust
fn add_fn(x: i32, y: i32) -> i32 {
    x + y
}

fn main() {
    let a = 5;
    // Closure captures 'a' from the environment
    let add_closure = |x: i32| x + a;
    // Function pointer
    let f: fn(i32, i32) -> i32 = add_fn;

    println!("With closure: {}", add_closure(3)); // 8
    println!("With function pointer: {}", f(3, 4)); // 7
}
```

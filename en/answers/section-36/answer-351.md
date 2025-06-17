## 📘 Section: Closures and Functional Techniques  
### 🔹 Category: Closure Basics  
#### ✅ Answer 351: Defining closures and capturing variables from environment

Closures in Rust can automatically capture variables from their environment. In this example, an integer variable is captured by reference inside a closure, and the closure prints the value when called.

```rust
fn main() {
    let x = 10;
    let print_x = || {
        println!("x = {}", x);
    };
    print_x();
}
```

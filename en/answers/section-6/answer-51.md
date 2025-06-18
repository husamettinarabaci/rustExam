## 📘 Section: Functions II  
### 🔹 Category: Scope and Lifetime  
#### ✅ Answer 51: Function scope and variable lifetime

In Rust, variables are only valid within the scope they are declared. Once the scope ends, the variable is dropped and cannot be accessed.

```rust
fn print_scope() {
    let x = 10;
    println!("x inside function: {}", x); // x is valid here
}

fn main() {
    print_scope();
    // println!("x outside function: {}", x); // Error: x not found in this scope
}
```

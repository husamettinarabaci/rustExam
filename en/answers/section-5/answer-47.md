## 📘 Section: Functions I  
### 🔹 Category: Function Calls  
#### ✅ Answer 47: Function that calls another function

In Rust, you can call a function from within another function by simply using its name followed by parentheses. This is useful for code organization and reusability.

```rust
fn greet() {
    println!("Hello from greet!");
}

fn call_greet() {
    greet();
}

fn main() {
    call_greet();
}
```

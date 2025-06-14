## 📘 Section: Macros and Metaprogramming  
### 🔹 Category: Macro Hygiene  
#### ✅ Answer 205: Understanding macro hygiene

Macro hygiene ensures that variables declared inside a macro do not conflict with variables outside the macro. Rust achieves this by renaming variables internally.

```rust
macro_rules! make_var {
    () => {
        let x = 42;
        println!("Inside macro: {}", x);
    };
}

fn main() {
    let x = 10;
    make_var!();
    println!("Outside macro: {}", x);
}
```

## 📘 Section: Macro Rules and Declarative Macros  
### 🔹 Category: Hygienic macros and avoiding name conflicts  
#### ✅ Answer 683: Creating hygienic macros to avoid name conflicts

This problem demonstrates how macro hygiene in Rust prevents name conflicts. Variables defined inside a macro do not clash with those outside the macro call.

```rust
macro_rules! make_var {
    () => {
        let x = 42;
        println!("x inside macro: {}", x);
    };
}

fn main() {
    let x = 10;
    make_var!();
    println!("x in main: {}", x);
}
```
The `x` inside the macro does not conflict with the `x` in `main`. This is due to macro hygiene.

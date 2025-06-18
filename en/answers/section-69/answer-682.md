## 📘 Section: Macro Rules and Declarative Macros  
### 🔹 Category: macro_rules! for repetition and automation  
#### ✅ Answer 682: Using repetition, pattern matching, and metavariables

This problem requires writing a macro with `macro_rules!` that handles multiple arguments using pattern matching and metavariables.

```rust
macro_rules! print_all {
    ($($x:expr),*) => {
        $(println!("{}", $x);)*
    };
}

fn main() {
    print_all!(1, "hello", 3.14);
}
```
The macro prints each argument in order. `$x:expr` is a metavariable, and pattern matching captures multiple arguments.

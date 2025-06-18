## 📘 Section: Compile-Time Programming Patterns  
### 🔹 Category: Macro-Based Code Generation Patterns  
#### ✅ Answer 1329: Macro-based code generation patterns

Macros are used to reduce repetitive code. Below, a macro generates similar functions for different types.

```rust
macro_rules! create_add_fn {
    ($name:ident, $t:ty) => {
        fn $name(a: $t, b: $t) -> $t {
            a + b
        }
    };
}

create_add_fn!(add_i32, i32);
create_add_fn!(add_f64, f64);

fn main() {
    println!("{}", add_i32(2, 3));
    println!("{}", add_f64(1.5, 2.5));
}
```
This macro generates addition functions for different types, reducing code repetition.

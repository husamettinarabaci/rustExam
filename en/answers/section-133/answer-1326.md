## 📘 Section: Compile-Time Programming Patterns  
### 🔹 Category: Compile-Time Error Generation with Procedural Macros  
#### ✅ Answer 1326: Compile-time error generation with procedural macros

Procedural macros can generate compile-time errors if certain conditions are not met. Below is an example macro that only allows a specific name.

```rust
// src/lib.rs
use proc_macro::TokenStream;

#[proc_macro]
pub fn check_name(input: TokenStream) -> TokenStream {
    let input_str = input.to_string();
    if input_str != "ALLOWED" {
        panic!("Only 'ALLOWED' is permitted!");
    }
    TokenStream::new()
}

// main.rs
use my_macro::check_name;

check_name!(ALLOWED); // Compiles
// check_name!(FORBIDDEN); // Compile-time error
```
Here, the macro produces a compile-time error if used incorrectly.

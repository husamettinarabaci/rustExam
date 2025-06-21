## 📘 Section: Procedural Macros and Code Generation  
### 🔹 Category: Macro Crate Organization  
#### ✅ Answer 620: Organizing macro crates and exposing macros across packages

Procedural macros must be defined in their own crate with `proc-macro = true` in `Cargo.toml`. To expose macros for use in other packages:

- Create a separate crate (e.g., `my_macros`) with `proc-macro = true`.
- Define your macros in this crate.
- In your main crate, add `my_macros` as a dependency and use the macros with `use my_macros::my_macro;`.

**Example:**

`my_macros/Cargo.toml`:
```toml
[lib]
proc-macro = true
```

`my_macros/src/lib.rs`:
```rust
use proc_macro::TokenStream;
#[proc_macro]
pub fn my_macro(_item: TokenStream) -> TokenStream {
    // ...
    _item
}
```

`main_crate/Cargo.toml`:
```toml
[dependencies]
my_macros = { path = "../my_macros" }
```

`main_crate/src/main.rs`:
```rust
use my_macros::my_macro;

my_macro! {
    // ...
}
```

This structure allows macros to be shared and reused across multiple packages.

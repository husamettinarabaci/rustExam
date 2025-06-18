## 📘 Section: Advanced Macro Design  
### 🔹 Category: Documenting macros for users  
#### ✅ Answer 818: Documenting macros for users

Below is user-friendly documentation and an example for a macro.

```rust
/// The `repeat_n!` macro repeats an expression n times.
///
/// # Usage
///
/// ```rust
/// repeat_n!(println!("Hello!"), 3);
/// // Output:
/// // Hello!
/// // Hello!
/// // Hello!
/// ```
///
/// # Limitations
/// n must be a positive integer.
#[macro_export]
macro_rules! repeat_n {
    ($expr:expr, $n:expr) => {{
        for _ in 0..$n { $expr; }
    }};
}
```

This macro repeats the given expression n times. The documentation includes an example and explains its limitations.

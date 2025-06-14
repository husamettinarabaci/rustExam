## 📘 Section: Macros and Metaprogramming  
### 🔹 Category: Macro Debugging  
#### ✅ Answer 209: Debugging macros in Rust

To debug macros, use `cargo expand` to see the expanded code. Add `println!` or `dbg!` in macro-generated code for runtime checks. Write small test cases and expand macros manually if needed.

- Use `cargo expand` to view macro expansion.
- Add debug prints in macro code.
- Test macros in isolation.

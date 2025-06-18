## 📘 Section: DSL User Experience and Tooling  
### 🔹 Category: Designing User-Friendly DSL Syntax  
#### ✅ Answer 1411: Designing user-friendly DSL syntax

A user-friendly DSL uses clear and intuitive syntax that minimizes errors. For example, a math DSL might look like:

```rust
// Simple math DSL
let result = calc! {
    2 + 3 * 4
};
assert_eq!(result, 14);
```
Design principles: readability, predictability, clear error messages, and avoiding unnecessary complexity.

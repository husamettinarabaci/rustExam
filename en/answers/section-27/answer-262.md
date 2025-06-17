## 📘 Section: Lifetimes and Borrowing Semantics  
### 🔹 Category: 'static vs Non-Static Lifetimes  
#### ✅ Answer 262: Explaining the difference between `'static` and non-static lifetimes

In Rust, the `'static` lifetime means that a reference is valid for the entire duration of the program. This is common for string literals (`&'static str`) and global data. Non-static lifetimes are tied to a specific scope or function and are only valid for a limited time.

**Example:**

```rust
// Reference with 'static lifetime
let s: &'static str = "hello";

// Reference with non-static lifetime
let name = String::from("rustacean");
let r: &str = &name; // r is valid as long as name is valid
```

The `'static` lifetime is required when working with threads or global data, while non-static lifetimes are used for function parameters and temporary variables.

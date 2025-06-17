## 📘 Section: Lifetimes and Borrowing in Practice  
### 🔹 Category: Troubleshooting Lifetime Errors  
#### ✅ Answer 449: Troubleshooting common lifetime errors

Returning a reference to a local variable is invalid because the variable is dropped when the function ends. The correct way is to return an owned value.

```rust
// This will not compile:
// fn bad_ref() -> &i32 {
//     let x = 5;
//     &x
// }

// Correct way:
fn good_val() -> i32 {
    let x = 5;
    x
}
```

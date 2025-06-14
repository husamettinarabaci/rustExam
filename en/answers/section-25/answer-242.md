## 📘 Section: Closures and Ownership  
### 🔹 Category: Closure Capture by Value  
#### ✅ Answer 242: Closure capture by value (`move`)

A closure can capture variables by value using the `move` keyword. This moves or copies the captured variables into the closure.

```rust
let s = String::from("hello");
let print_s = move || println!("{}", s);
print_s();
// s can no longer be used here
```

The `move` keyword forces the closure to take ownership of the captured variables.

## 📘 Section: Closures and Ownership  
### 🔹 Category: Mutating Captured Variables  
#### ✅ Answer 243: Mutating captured variables in closures

A closure can mutate a captured variable if it is declared as `FnMut` and the variable is mutable.

```rust
let mut x = 0;
let mut add_one = || { x += 1; };
add_one();
println!("x = {}", x);
```

Such closures implement the `FnMut` trait.

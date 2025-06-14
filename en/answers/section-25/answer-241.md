## 📘 Section: Closures and Ownership  
### 🔹 Category: Closure Capture by Reference  
#### ✅ Answer 241: Closure capture by reference

A closure can borrow variables from its environment by reference. The closure can read the value, but cannot mutate it unless the variable is mutable and the closure is declared as `FnMut`.

```rust
let x = 5;
let print_x = || println!("x = {}", x);
print_x();
```

If you try to mutate `x` after the closure is created, you may get a borrow checker error if the closure is still in use.

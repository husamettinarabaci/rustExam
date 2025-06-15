## 📘 Section: Modules I  
### 🔹 Category: Module Re-exports  
#### ❓ Question 127: Module re-exports

Write a Rust program that demonstrates how to re-export items from a module.

- Create a module named `math` with a public function `add`.
- In the root of your program, use `pub use math::add;` to re-export the `add` function.
- In the main function, call `add` directly without the module path.

🔧 **Task:** Show how to re-export a function from a module so it can be accessed directly from outside the module.

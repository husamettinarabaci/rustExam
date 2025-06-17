## 📘 Section: Modules and Crate Structure  
### 🔹 Category: Module Re-exports  
#### ❓ Question 294: Re-exporting items from nested modules

Create an example in Rust that demonstrates re-exporting an item from a nested module:

- Define a parent module named `outer` and a child module named `inner` inside it.
- In the `inner` module, create a public function (`pub fn hello()`).
- In the `outer` module, re-export this function using `pub use self::inner::hello;`.
- In the `main` function, call the function directly as `outer::hello()`.

🔧 **Task:** Use the `pub use` keyword to re-export a function from a nested module.

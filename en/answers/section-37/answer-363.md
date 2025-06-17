## 📘 Section: Modules and Visibility  
### 🔹 Category: Organizing code with nested modules  
#### ✅ Answer 363: Organizing code with nested modules

In Rust, modules are used to logically split and organize your code. Modules can contain other modules (submodules), and each module can define its own functions and variables. You access items in submodules using their path.

The following example demonstrates nested modules and how to access their items:

```rust
mod outer {
    pub fn outer_fn() {
        println!("outer_fn called");
    }
    pub mod inner {
        pub fn inner_fn() {
            println!("inner_fn called");
        }
    }
}

fn main() {
    outer::outer_fn();           // Function in the outer module
    outer::inner::inner_fn();    // Function in the inner submodule
}
```

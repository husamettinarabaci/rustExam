## 📘 Section: Modules and Crate Structure  
### 🔹 Category: Module Re-exports  
#### ✅ Answer 294: Re-exporting items from nested modules

In this example, a function defined in a nested module is re-exported at the parent module level using `pub use`. This allows the function to be accessed directly through the parent module, providing a cleaner public API and hiding internal module structure.

```rust
mod outer {
    pub mod inner {
        pub fn hello() {
            println!("Hello from inner module!");
        }
    }
    pub use self::inner::hello;
}

fn main() {
    outer::hello();
}
```

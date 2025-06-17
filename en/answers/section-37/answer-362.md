## 📘 Section: Modules and Visibility  
### 🔹 Category: Visibility and Access Control  
#### ✅ Answer 362: Using `pub`, `pub(crate)`, and private visibility

In Rust, you can control the visibility of functions within a module using `pub`, `pub(crate)`, or the default (private) visibility. Functions marked `pub` are accessible from anywhere, `pub(crate)` restricts access to within the same crate, and private functions are only accessible within their defining module.

```rust
mod first {
    pub fn public_fn() {
        println!("Public function");
    }
    pub(crate) fn crate_fn() {
        println!("Crate-visible function");
    }
    fn private_fn() {
        println!("Private function");
    }
}

fn main() {
    first::public_fn(); // Accessible
    first::crate_fn(); // Accessible (same crate)
    // first::private_fn(); // Compile error: function is private
}
```

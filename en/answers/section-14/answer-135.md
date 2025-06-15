## 📘 Section: Modules II  
### 🔹 Category: Nested Modules and Visibility  
#### ✅ Answer 135: Nested modules and visibility

In Rust, nested modules allow you to organize code hierarchically. By default, items in modules are private to their parent. You can use `pub` to make items visible outside their immediate module, and `pub(crate)` to restrict visibility to the current crate. Here's an example:

```rust
mod outer {
    pub mod inner {
        pub fn public_fn() {
            println!("This is a public function in inner module");
        }
        fn private_fn() {
            println!("This is a private function in inner module");
        }
        pub(crate) fn crate_fn() {
            println!("This is visible within the crate");
        }
    }
}

fn main() {
    // Accessible: public function
    outer::inner::public_fn();
    // Not accessible: private_fn() is private
    // outer::inner::private_fn(); // Error
    // Accessible within the same crate: crate_fn()
    outer::inner::crate_fn();
}
```

- `pub` makes `public_fn` accessible from outside the module.
- `private_fn` is only accessible within `inner`.
- `pub(crate)` makes `crate_fn` accessible anywhere in the same crate, but not from outside the crate.

## 📘 Section: Modules and Visibility  
### 🔹 Category: Accessing deeply nested items  
#### ✅ Answer 368: Accessing deeply nested items

In Rust, you can create a hierarchy of nested modules. To access a public function in the innermost module, use its full path from the root module.

`main.rs`:
```rust
mod a {
    pub mod b {
        pub mod c {
            pub fn deep_hello() {
                println!("Hello from the deep module!");
            }
        }
    }
}

fn main() {
    a::b::c::deep_hello();
}
```

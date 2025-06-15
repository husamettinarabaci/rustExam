## 📘 Section: Modules II  
### 🔹 Category: Privacy Rules  
#### ✅ Answer 132: Privacy rules in modules

By default, items in a Rust module are private. The `pub` keyword makes them accessible from outside. Attempting to access a private item from outside the module results in a compile-time error.

```rust
mod my_mod {
    pub const PUBLIC_CONST: i32 = 1;
    const PRIVATE_CONST: i32 = 2;
    pub fn public_fn() {
        println!("public_fn");
    }
    fn private_fn() {
        println!("private_fn");
    }
}

fn main() {
    println!("{}", my_mod::PUBLIC_CONST); // OK
    my_mod::public_fn(); // OK
    // println!("{}", my_mod::PRIVATE_CONST); // ERROR: private
    // my_mod::private_fn(); // ERROR: private
}
```

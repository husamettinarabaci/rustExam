## 📘 Section: Compile-Time Engines and Metaprogramming
### 🔹 Category: Coding Standards Enforcement
#### ✅ Answer 1278: Using macros to enforce coding standards

You can use macros to enforce coding standards. Example:

```rust
macro_rules! pub_struct {
    (struct $name:ident { $(pub $field:ident : $ty:ty),* $(,)? }) => {
        struct $name { $(pub $field: $ty),* }
    };
    (struct $name:ident { $($rest:tt)* }) => {
        compile_error!("All fields must be public (pub)");
    };
}

pub_struct!(struct Person { pub name: String, pub age: u32 });
// pub_struct!(struct Bad { name: String }); // This will not compile
```

The macro enforces all fields are `pub`.

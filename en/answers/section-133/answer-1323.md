## 📘 Section: Compile-Time Programming Patterns  
### 🔹 Category: Compile-Time Reflection with Macros  
#### ✅ Answer 1323: Compile-time reflection with macros

Rust does not have direct compile-time reflection, but macros can be used to extract struct field names.

```rust
macro_rules! field_names {
    ($name:ident { $($field:ident : $ty:ty),* $(,)? }) => {
        [$(stringify!($field)),*]
    };
}

struct Person {
    name: String,
    age: u8,
}

const FIELDS: &[&str] = &field_names!(Person { name: String, age: u8 });

fn main() {
    println!("Fields: {:?}", FIELDS);
}
```
This macro extracts the field names as a constant array at compile time.

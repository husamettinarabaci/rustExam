## 📘 Section: Compile-Time Reflection and Introspection
### 🔹 Category: Compile-Time Reflection
#### ✅ Answer 1476: Reflection-driven API design

A reflection-driven API can provide access to type and field information. In Rust, this is typically done with traits and macros.

```rust
trait Reflect {
    fn type_name() -> &'static str;
}

struct MyStruct;

impl Reflect for MyStruct {
    fn type_name() -> &'static str { "MyStruct" }
}

fn main() {
    println!("Type: {}", MyStruct::type_name());
}
```

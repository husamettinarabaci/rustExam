## 📘 Section: Advanced Macro Design  
### 🔹 Category: Using macros for code generation and boilerplate reduction  
#### ✅ Answer 815: Using macros for code generation and boilerplate reduction

Below is a macro that automatically generates getter functions, eliminating the need to write repetitive code.

```rust
macro_rules! make_getters {
    ($name:ident { $($field:ident : $fty:ty),* }) => {
        struct $name {
            $(pub $field: $fty),*
        }
        impl $name {
            $(pub fn $field(&self) -> &$fty { &self.$field })*
        }
    }
}

make_getters!(Person { name: String, age: u32 });

fn main() {
    let p = Person { name: "Alice".to_string(), age: 30 };
    println!("{} {}", p.name(), p.age());
}
```

The macro generates both the struct and its getter functions automatically.

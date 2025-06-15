## 📘 Section: Generics II  
### 🔹 Category: Generic enums with lifetimes  
#### ✅ Answer 226: Defining a generic enum with lifetime parameters

This example shows how to define an enum with both a generic type parameter and a lifetime parameter. The `RefOrValue` enum can hold either a reference or an owned value. The `get` method returns a reference to the value in both cases.

```rust
enum RefOrValue<'a, T> {
    Ref(&'a T),
    Val(T),
}

impl<'a, T> RefOrValue<'a, T> {
    fn get(&self) -> &T {
        match self {
            RefOrValue::Ref(r) => r,
            RefOrValue::Val(v) => v,
        }
    }
}

fn main() {
    let x = 10;
    let r = RefOrValue::Ref(&x);
    let v = RefOrValue::Val(20);
    println!("Ref: {}", r.get());
    println!("Val: {}", v.get());
}
```

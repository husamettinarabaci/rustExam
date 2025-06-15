## 📘 Section: Generics II  
### 🔹 Category: Generic structs with lifetimes  
#### ✅ Answer 225: Defining a generic struct with lifetime parameters

This example shows how to define a struct with both a generic type parameter and a lifetime parameter. The `Holder` struct stores a reference to a value of type `T` and ensures the reference is valid for the specified lifetime. The `get` method returns the referenced value.

```rust
struct Holder<'a, T> {
    value: &'a T,
}

impl<'a, T> Holder<'a, T> {
    fn get(&self) -> &T {
        self.value
    }
}

fn main() {
    let x = 42;
    let holder = Holder { value: &x };
    println!("Held value: {}", holder.get());
}
```

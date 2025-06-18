## 📘 Section: Lifetimes I  
### 🔹 Category: Lifetime in Generic Structs  
#### ✅ Answer 79: Lifetime in generic structs

A struct can have both a generic type parameter and a lifetime parameter. This is useful when the struct holds a reference to a value of any type. Here is an example:

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
    let num = 42;
    let holder = Holder { value: &num };
    println!("Held value: {}", holder.get());
}
```

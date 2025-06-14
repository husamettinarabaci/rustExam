## 📚 Section: Generics  
### 🔹 Category: Generic Methods  
#### ✅ Answer 76: Implementing generic methods

**Explanation:**
You can implement methods on generic structs, and those methods can also be generic.

```rust
struct Wrapper<T> {
    value: T,
}

impl<T> Wrapper<T> {
    fn get_value(&self) -> &T {
        &self.value
    }
}

fn main() {
    let w = Wrapper { value: 42 };
    println!("{}", w.get_value());
}
```

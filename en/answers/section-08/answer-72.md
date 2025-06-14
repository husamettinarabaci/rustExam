## 📚 Section: Generics  
### 🔹 Category: Generic Structs  
#### ✅ Answer 72: Defining a generic struct

**Explanation:**
Generic structs can hold values of any type, specified at instantiation.

```rust
struct Container<T> {
    value: T,
}

fn main() {
    let int_container = Container { value: 5 };
    let str_container = Container { value: "hello" };
}
```

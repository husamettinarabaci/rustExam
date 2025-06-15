## 📘 Section: Generics I  
### 🔹 Category: Generic Structs  
#### ✅ Answer 212: Generic structs

Generic structs allow you to define data structures that can hold values of any type. In this example, the struct `Boxed` is generic over type `T`. You can create `Boxed<i32>`, `Boxed<&str>`, etc.

```rust
struct Boxed<T> {
    value: T,
}

fn main() {
    let int_box = Boxed { value: 10 };
    let str_box = Boxed { value: "hello" };
    println!("{}", int_box.value);
    println!("{}", str_box.value);
}
```

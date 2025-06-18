## 📘 Section: Compile-Time Programming Patterns  
### 🔹 Category: Type Safety with Const Generics  
#### ✅ Answer 1325: Type safety with const generics

Const generics allow compile-time constants to be part of a type, increasing type safety.

```rust
struct ArrayWrapper<T, const N: usize> {
    data: [T; N],
}

impl<T, const N: usize> ArrayWrapper<T, N> {
    fn new(data: [T; N]) -> Self {
        ArrayWrapper { data }
    }
}

fn main() {
    let arr = ArrayWrapper::new([1, 2, 3]);
    println!("First element: {}", arr.data[0]);
}
```
Here, the array length is part of the type and checked at compile time.

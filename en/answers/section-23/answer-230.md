## 📘 Section: Generics II  
### 🔹 Category: Generic Const Parameters  
#### ✅ Answer 230: Using Generic Const Parameters in Structs

This example demonstrates how to use generic const parameters in a struct. The `ArrayHolder<T, N>` struct can hold an array of any type `T` and any size `N` (where `N` is a compile-time constant). The constructor `new` takes an array and returns an instance of the struct.

```rust
struct ArrayHolder<T, const N: usize> {
    data: [T; N],
}

impl<T, const N: usize> ArrayHolder<T, N> {
    fn new(data: [T; N]) -> Self {
        ArrayHolder { data }
    }
}

fn main() {
    let arr = [1, 2, 3, 4];
    let holder = ArrayHolder::new(arr);
    println!("ArrayHolder contains: {:?}", holder.data);
}
```

Here, `ArrayHolder<i32, 4>` is instantiated with an array of four `i32` values.

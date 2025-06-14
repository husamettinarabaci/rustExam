## 📘 Section: Advanced Traits and Generics  
### 🔹 Category: PhantomData  
#### ✅ Answer 155: Using PhantomData in generic structs

`PhantomData` is used in generic structs to indicate that the struct logically owns data of type `T`, even if it does not store a value of that type. This is important for correct variance and drop checking.

```rust
use std::marker::PhantomData;

struct MyType<T> {
    marker: PhantomData<T>,
}
```

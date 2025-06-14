## 📚 Section: Generics  
### 🔹 Category: PhantomData  
#### ✅ Answer 78: Using PhantomData

**Explanation:**
`PhantomData` is used to tell the compiler about unused generic type parameters for ownership or variance.

```rust
use std::marker::PhantomData;

struct MyType<T> {
    _marker: PhantomData<T>,
}
```

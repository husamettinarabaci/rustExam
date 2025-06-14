## 📚 Section: Generics  
### 🔹 Category: Multiple Type Parameters  
#### ✅ Answer 75: Using multiple type parameters

**Explanation:**
You can use multiple type parameters to store different types in a struct.

```rust
struct Pair<T, U> {
    first: T,
    second: U,
}

fn main() {
    let pair = Pair { first: 1, second: "two" };
}
```

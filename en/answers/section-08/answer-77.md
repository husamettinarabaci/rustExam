## 📚 Section: Generics  
### 🔹 Category: Associated Types  
#### ✅ Answer 77: Using associated types in traits

**Explanation:**
Associated types allow traits to define placeholder types to be specified by implementors.

```rust
trait Summable {
    type Item;
    fn sum(&self) -> Self::Item;
}

struct MyVec(Vec<i32>);

impl Summable for MyVec {
    type Item = i32;
    fn sum(&self) -> i32 {
        self.0.iter().sum()
    }
}
```

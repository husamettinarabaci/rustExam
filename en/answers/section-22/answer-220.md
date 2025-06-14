## 📘 Section: Traits I  
### 🔹 Category: Associated Types  
#### ✅ Answer 220: Traits with associated types

Associated types are placeholder types defined in a trait and specified by implementors.

```rust
trait Iterator {
    type Item;
    fn next(&mut self) -> Option<Self::Item>;
}

struct Counter;
impl Iterator for Counter {
    type Item = u32;
    fn next(&mut self) -> Option<Self::Item> {
        // implementation
        None
    }
}
```

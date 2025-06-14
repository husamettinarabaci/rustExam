## 📚 Section: Traits  
### 🔹 Category: Associated Types in Traits  
#### ✅ Answer 97: Using associated types in traits

**Explanation:**
Associated types allow traits to define placeholder types to be specified by implementors.

```rust
trait Iterator {
    type Item;
    fn next(&mut self) -> Option<Self::Item>;
}

struct Counter {
    count: i32,
}

impl Iterator for Counter {
    type Item = i32;
    fn next(&mut self) -> Option<i32> {
        self.count += 1;
        if self.count < 5 {
            Some(self.count)
        } else {
            None
        }
    }
}
```

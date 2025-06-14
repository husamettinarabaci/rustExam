## 📘 Section: Closures and Iterator Basics  
### 🔹 Category: Iterator Methods  
#### ✅ Answer 233: Using `iter`, `map`, and `filter`

You can chain iterator methods like `iter`, `map`, and `filter` to process collections.

```rust
let nums = [1, 2, 3, 4, 5];
let evens: Vec<_> = nums.iter().map(|x| x * 2).filter(|x| x % 4 == 0).collect();
```

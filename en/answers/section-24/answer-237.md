## 📘 Section: Closures and Iterator Basics  
### 🔹 Category: Find and Position  
#### ✅ Answer 237: Using `find` and `position`

`find` returns the first element matching a predicate; `position` returns its index.

```rust
let nums = [1, 2, 3, 4];
let found = nums.iter().find(|&&x| x == 3);
let pos = nums.iter().position(|&x| x == 3);
```

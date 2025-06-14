## 📘 Section: Closures and Iterator Basics  
### 🔹 Category: Any and All  
#### ✅ Answer 239: Using `any` and `all`

`any` checks if any element matches a predicate; `all` checks if all do.

```rust
let nums = [1, 2, 3, 4];
let has_even = nums.iter().any(|&x| x % 2 == 0);
let all_positive = nums.iter().all(|&x| x > 0);
```

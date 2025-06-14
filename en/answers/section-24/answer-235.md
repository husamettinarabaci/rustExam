## 📘 Section: Closures and Iterator Basics  
### 🔹 Category: Chaining Iterator Methods  
#### ✅ Answer 235: Chaining iterator methods

You can chain iterator methods for concise and expressive data processing.

```rust
let nums = [1, 2, 3, 4];
let result: Vec<_> = nums.iter().map(|x| x + 1).filter(|x| x % 2 == 0).take(2).collect();
```

Chaining allows for readable and efficient transformations.

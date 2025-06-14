## 📘 Section: Closures and Iterator Basics  
### 🔹 Category: Fold and Reduce  
#### ✅ Answer 236: Using `fold` and `reduce`

`fold` and `reduce` are used to combine elements of an iterator.

```rust
let nums = [1, 2, 3, 4];
let sum = nums.iter().fold(0, |acc, x| acc + x);
let product = nums.iter().copied().reduce(|a, b| a * b);
```

`fold` takes an initial value; `reduce` combines elements without an initial value.

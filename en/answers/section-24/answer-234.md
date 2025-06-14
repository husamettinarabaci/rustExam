## 📘 Section: Closures and Iterator Basics  
### 🔹 Category: Consuming Iterators  
#### ✅ Answer 234: Consuming iterators with `collect`

The `collect` method consumes an iterator and gathers the results into a collection.

```rust
let nums = [1, 2, 3];
let doubled: Vec<_> = nums.iter().map(|x| x * 2).collect();
```

After calling `collect`, the iterator is consumed and cannot be used again.

## 📘 Section: Closures and Iterator Basics  
### 🔹 Category: Enumerate and Zip  
#### ✅ Answer 238: Using `enumerate` and `zip`

`enumerate` adds indices to items; `zip` combines two iterators.

```rust
let nums = [10, 20, 30];
for (i, val) in nums.iter().enumerate() {
    println!("{}: {}", i, val);
}

let a = [1, 2];
let b = ["a", "b"];
for (x, y) in a.iter().zip(b.iter()) {
    println!("{} - {}", x, y);
}
```

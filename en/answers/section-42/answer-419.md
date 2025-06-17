## 📘 Section: Collections: Vec, HashMap, HashSet
### 🔹 Category: Combining Iterators and Collections for Filtering
#### ✅ Answer 419: Combining iterators and collections for filtering

You can filter elements in a vector using `iter` and `filter`. The result can be collected into a new vector.

```rust
fn main() {
    let v = vec![1, 2, 3, 4, 5, 6];
    let even: Vec<_> = v.iter().filter(|x| **x % 2 == 0).collect();
    println!("Even numbers: {:?}", even);
}
```

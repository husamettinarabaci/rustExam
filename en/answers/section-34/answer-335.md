## 📘 Section: Collections and Iterators
### 🔹 Category: Iterator Adaptors and Chaining
#### ✅ Answer 335: Collecting iterator results into collections

This solution uses iterator adaptors to filter for values greater than 5, multiplies each by 3, and collects the results into both a vector and a `HashSet`. The `collect` method is used to convert the iterator into different collection types.

```rust
use std::collections::HashSet;

fn main() {
    let numbers = vec![1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let iter = numbers.iter().filter(|x| **x > 5).map(|x| x * 3);
    let vec_result: Vec<_> = iter.clone().collect();
    let set_result: HashSet<_> = numbers.iter().filter(|x| **x > 5).map(|x| x * 3).collect();
    println!("Vector: {:?}", vec_result);
    println!("HashSet: {:?}", set_result);
}
```

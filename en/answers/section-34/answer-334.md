## 📘 Section: Collections and Iterators  
### 🔹 Category: Iterator Adaptors and Chaining  
#### ✅ Answer 334: Chaining iterator adaptors like `map`, `filter`, `take`

This solution demonstrates how to process data by chaining iterator adaptors. `map` transforms each element, `filter` selects the desired ones, and `take` limits the results. The final values are collected into a vector and printed.

```rust
fn main() {
    let numbers = vec![1, 2, 3, 4, 5, 6, 7, 8];
    let result: Vec<i32> = numbers
        .iter()
        .map(|x| x * 2)
        .filter(|x| x % 2 == 0)
        .take(3)
        .cloned()
        .collect();
    println!("Result: {:?}", result);
}
```

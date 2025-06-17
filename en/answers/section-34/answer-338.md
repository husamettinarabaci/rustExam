## 📘 Section: Collections and Iterators
### 🔹 Category: Custom Iterators and Folding
#### ✅ Answer 338: Finding, folding, and reducing values from iterators

This example demonstrates how to use the `find`, `fold`, and `reduce` iterator methods on a vector. `find` searches for a specific value, `fold` calculates the sum of all elements, and `reduce` finds the maximum value. Note: `reduce` is available in Rust 1.51 and later.

```rust
fn main() {
    let numbers = vec![3, 7, 2, 9, 4];

    // Find the value 7
    if let Some(found) = numbers.iter().find(|&&x| x == 7) {
        println!("Found: {}", found);
    } else {
        println!("Value not found");
    }

    // Sum all elements
    let sum = numbers.iter().fold(0, |acc, &x| acc + x);
    println!("Sum: {}", sum);

    // Find the maximum value
    let max = numbers.iter().copied().reduce(|a, b| a.max(b));
    match max {
        Some(m) => println!("Max: {}", m),
        None => println!("Vector is empty"),
    }
}
```

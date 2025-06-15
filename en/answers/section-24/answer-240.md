## 📘 Section: Closures and Iterator Basics  
### 🔹 Category: Using `peekable` and `cycle`  
#### ✅ Answer 240: Using `peekable` and `cycle` with Iterators

This solution demonstrates how to use the `peekable` and `cycle` methods on iterators. `peekable` allows you to look at the next element without consuming it, and `cycle` repeats the iterator infinitely.

```rust
fn main() {
    let numbers = vec![1, 2, 3];

    // Using cycle to repeat the elements
    let mut cycled = numbers.iter().cycle();
    println!("First five elements from cycled iterator:");
    for _ in 0..5 {
        if let Some(val) = cycled.next() {
            print!("{} ", val);
        }
    }
    println!();

    // Using peekable to look ahead
    let mut peek_iter = numbers.iter().peekable();
    if let Some(&next) = peek_iter.peek() {
        println!("Next element (peeked): {}", next);
    }
    if let Some(val) = peek_iter.next() {
        println!("Next element (consumed): {}", val);
    }
}
```

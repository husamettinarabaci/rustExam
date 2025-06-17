## 📘 Section: Advanced Pattern Matching
### 🔹 Category: Pattern matching with `while let`
#### ✅ Answer 384: Pattern matching with `while let`

This problem demonstrates how to use `while let` to process elements from a collection one by one. This is a practical way to work with iterators and collections in Rust.

```rust
fn main() {
    let mut numbers = vec![1, 2, 3].into_iter();
    while let Some(n) = numbers.next() {
        println!("Number: {}", n);
    }
}
```

## 📘 Section: Advanced Pattern Matching
### 🔹 Category: Refutable vs irrefutable patterns
#### ✅ Answer 388: Refutable vs irrefutable patterns

This problem demonstrates the difference between refutable and irrefutable patterns in Rust, with code examples for both.

```rust
fn main() {
    // Irrefutable pattern: always matches
    let (a, b) = (1, 2);
    println!("a = {}, b = {}", a, b);

    // Refutable pattern: may not match
    let opt = Some(5);
    if let Some(x) = opt {
        println!("Matched: {}", x);
    } else {
        println!("No match");
    }
}
```

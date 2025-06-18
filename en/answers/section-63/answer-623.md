## 📘 Section: Advanced Trait Design and Usage
### 🔹 Category: Associated Types and Constants in Traits
#### ✅ Answer 623: Designing traits with associated types and constants

Associated types and constants in traits allow you to define placeholders for types and values that implementors must specify. This is useful for generic code and for enforcing certain invariants.

```rust
trait Iterator {
    type Item;
    const STEP: usize;
    fn next(&mut self) -> Option<Self::Item>;
}

struct Counter {
    count: usize,
}

impl Iterator for Counter {
    type Item = usize;
    const STEP: usize = 1;
    fn next(&mut self) -> Option<Self::Item> {
        self.count += Self::STEP;
        Some(self.count)
    }
}

fn main() {
    let mut c = Counter { count: 0 };
    println!("{}", c.next().unwrap());
}
```

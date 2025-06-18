## 📘 Section: Systems Programming Mastery  
### 🔹 Category: High-Performance Parsers  
#### ✅ Answer 597: Writing high-performance parsers

For fast parsing in Rust, use slices and iterators. Here is a simple CSV parser example:

```rust
use std::time::Instant;

fn parse_csv(input: &str) -> Vec<Vec<&str>> {
    input.lines().map(|line| line.split(',').collect()).collect()
}

fn main() {
    let data = "a,b,c\n1,2,3\n4,5,6";
    let start = Instant::now();
    let parsed = parse_csv(data);
    let duration = start.elapsed();
    println!("Parsed: {:?}", parsed);
    println!("Elapsed: {:?}", duration);
}
```

## 📘 Section: Systems Programming Advanced Topics  
### 🔹 Category: High-Performance Parsers  
#### ✅ Answer 795: Writing high-performance parsers

High-performance parsers in Rust can use parser combinators or hand-written logic. Efficient memory use and error handling are key. Example:

```rust
fn parse_numbers(input: &str) -> Result<Vec<u32>, &'static str> {
    input.split(',')
        .map(|s| s.trim().parse().map_err(|_| "parse error"))
        .collect()
}
```
This function parses a comma-separated list of numbers efficiently.

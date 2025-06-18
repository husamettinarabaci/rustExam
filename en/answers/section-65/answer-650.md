## 📘 Section: Performance Optimization and Profiling
### 🔹 Category: Compiler Flags and Optimization
#### ✅ Answer 650: Writing cache-friendly data structures

Cache-friendly data structures are laid out sequentially in memory, making better use of CPU caches. In Rust, vectors and flat arrays are advantageous.

```rust
struct Point {
    x: f64,
    y: f64,
}

fn main() {
    let points: Vec<Point> = (0..1000).map(|i| Point { x: i as f64, y: i as f64 }).collect();
    let sum: f64 = points.iter().map(|p| p.x + p.y).sum();
    println!("{}", sum);
}
```

Sequential data layout enables cache-friendly access and improves performance.

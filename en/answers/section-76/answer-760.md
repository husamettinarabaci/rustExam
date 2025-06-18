## 📘 Section: Advanced Concurrency and Synchronization
### 🔹 Category: Lock-Free Data Structures
#### ✅ Answer 760: Profiling multithreaded Rust applications

To profile multithreaded Rust applications, use tools like `perf`, `flamegraph`, or `cargo bench`. You can also measure timing in code.

```rust
use std::thread;
use std::time::Instant;

fn main() {
    let now = Instant::now();
    let mut handles = vec![];
    for _ in 0..4 {
        handles.push(thread::spawn(|| {
            let t0 = Instant::now();
            // Workload
            let mut sum = 0;
            for i in 0..1_000_000 { sum += i; }
            println!("Thread time: {:?}", t0.elapsed());
        }));
    }
    for h in handles { h.join().unwrap(); }
    println!("Total time: {:?}", now.elapsed());
}
```

Profiling results help analyze bottlenecks and per-thread performance. External tools provide deeper analysis.

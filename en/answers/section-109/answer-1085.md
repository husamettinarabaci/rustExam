## 📘 Section: Parallelism and Data-Parallel APIs  
### 🔹 Category: Using crossbeam for scoped threads  
#### ✅ Answer 1085: Using crossbeam for scoped threads

Crossbeam allows you to spawn scoped threads, where each thread can process a different part of a vector. The results are merged in the main thread.

```rust
use crossbeam::thread;

fn main() {
    let data = vec![1, 2, 3, 4, 5, 6];
    let mut results = vec![0; 2];
    thread::scope(|s| {
        let (left, right) = data.split_at(3);
        let r0 = &mut results[0];
        let r1 = &mut results[1];
        s.spawn(move |_| *r0 = left.iter().sum());
        s.spawn(move |_| *r1 = right.iter().sum());
    }).unwrap();
    println!("Results: {:?}", results);
}
```

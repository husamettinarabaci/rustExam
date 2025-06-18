## 📘 Section: Thread Management and Scheduling  
### 🔹 Category: Measuring Thread Performance  
#### ✅ Answer 1168: Measuring thread performance

This example measures the execution time of each thread and the total elapsed time. Each thread records its start and end time, and the durations are printed.

```rust
use std::thread;
use std::time::{Duration, Instant};

fn main() {
    let start = Instant::now();
    let mut handles = vec![];
    for i in 0..4 {
        handles.push(thread::spawn(move || {
            let t_start = Instant::now();
            thread::sleep(Duration::from_millis(100 * (i + 1)));
            let t_elapsed = t_start.elapsed();
            println!("Thread {} execution time: {:?}", i, t_elapsed);
        }));
    }
    for handle in handles {
        handle.join().unwrap();
    }
    println!("Total elapsed time: {:?}", start.elapsed());
}
```

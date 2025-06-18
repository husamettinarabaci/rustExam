## 📘 Section: Profiling and Performance Tuning  
### 🔹 Category: Startup Time Optimization  
#### ✅ Answer 975: Optimizing startup time in Rust applications

Reducing dependencies and using lazy initialization can help decrease startup time. Below is an example where a large vector is only initialized when needed.

```rust
use std::sync::OnceLock;

static DATA: OnceLock<Vec<u8>> = OnceLock::new();

fn get_data() -> &'static Vec<u8> {
    DATA.get_or_init(|| {
        // Large data is loaded only on first call
        (0..10_000_000).map(|x| (x % 256) as u8).collect()
    })
}

fn main() {
    println!("Program started");
    // get_data() is only called if needed
}
```

To measure startup time:
```
time ./target/release/<program_name>
```
Lazy loading shortens startup time.

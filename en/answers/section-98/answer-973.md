## 📘 Section: Profiling and Performance Tuning  
### 🔹 Category: Memory Analysis  
#### ✅ Answer 973: Memory profiling with `valgrind` and `massif`

The `massif` tool in `valgrind` analyzes a program's memory usage over time. You can run your Rust program as follows:

```rust
fn main() {
    let mut v = Vec::new();
    for i in 0..10_000_000 {
        v.push(i);
    }
    println!("Length: {}", v.len());
}
```

In the terminal:
```
cargo build --release
valgrind --tool=massif ./target/release/<program_name>
ms_print massif.out.<pid>
```
The `ms_print` output shows memory usage over time and which functions use the most memory.

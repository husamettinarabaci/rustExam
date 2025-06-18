## 📘 Section: Testing and Debugging Concurrent Code  
### 🔹 Category: Using Thread Sanitizers and Race Detectors  
#### ✅ Answer 1142: Using thread sanitizers and race detectors

Thread sanitizers (TSan) help detect data races in concurrent Rust code. A race condition occurs when two threads access and modify shared data without synchronization. Example:

```rust
static mut DATA: i32 = 0;
fn main() {
    let t1 = std::thread::spawn(|| unsafe { DATA += 1; });
    let t2 = std::thread::spawn(|| unsafe { DATA += 1; });
    t1.join().unwrap();
    t2.join().unwrap();
}
```

To run with TSan:
```
cargo run --target x86_64-unknown-linux-gnu -Z sanitizer=thread
```
TSan will report the race condition at runtime.

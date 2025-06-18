## 📘 Section: Rust for High-Assurance Systems
### 🔹 Category: Fault Tolerance and Recovery Mechanisms
#### ✅ Answer 1245: Fault tolerance and recovery mechanisms

Fault tolerance allows a system to continue operating despite errors; recovery restores normal operation after a failure. Rust supports this with `Result`, error handling, and retry logic.

```rust
fn try_read_file(path: &str) -> Result<String, std::io::Error> {
    std::fs::read_to_string(path)
}

fn main() {
    match try_read_file("data.txt") {
        Ok(data) => println!("Read: {}", data),
        Err(e) => println!("Recovering from error: {}", e),
    }
}
```

This code handles errors gracefully, supporting fault tolerance and recovery.

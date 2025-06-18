## 📘 Section: Rust in Cloud and Distributed Systems
### 🔹 Category: Microservices with Rust
#### ✅ Answer 937: Building fault-tolerant systems

Fault tolerance is the ability of a system to continue operating correctly even when some components fail. In distributed systems, it is essential for high availability and reliability.

Rust provides strong error handling with `Result` and `Option`. You can implement retries, circuit breakers, and supervisor patterns. Example:

```rust
// Retry logic for a fallible operation
fn retry<F, T, E>(mut op: F, max_retries: u32) -> Result<T, E>
where
    F: FnMut() -> Result<T, E>,
{
    let mut attempts = 0;
    loop {
        match op() {
            Ok(val) => return Ok(val),
            Err(e) if attempts < max_retries => attempts += 1,
            Err(e) => return Err(e),
        }
    }
}

// Using Result for error propagation
fn do_work() -> Result<(), String> {
    // ...
    Err("failure".to_string())
}

fn main() {
    let result = retry(|| do_work(), 3);
    match result {
        Ok(_) => println!("Success!"),
        Err(e) => println!("Failed after retries: {}", e),
    }
}
```

Strategies include error propagation, retries, circuit breakers (using crates like `circuitbreaker`), and supervisor processes. Monitoring and isolating failures are also key for robust distributed Rust systems.

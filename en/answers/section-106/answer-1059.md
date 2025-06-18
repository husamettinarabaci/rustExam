## 📘 Section: Async Error Handling
### 🔹 Category: Async Error Handling
#### ✅ Answer 1059: Using `tokio::task::spawn_blocking` safely

This example runs a CPU-intensive operation using `tokio::task::spawn_blocking` and handles errors for both the computation and the task itself.

```rust
use tokio::task;

fn cpu_heavy(n: i32) -> Result<i32, &'static str> {
    if n > 0 {
        Ok(n * n)
    } else {
        Err("Expected a positive number")
    }
}

#[tokio::main]
async fn main() {
    let res = task::spawn_blocking(|| cpu_heavy(-5)).await;
    match res {
        Ok(Ok(val)) => println!("Result: {}", val),
        Ok(Err(e)) => println!("Computation error: {}", e),
        Err(e) => println!("Task panicked: {}", e),
    }
}
```

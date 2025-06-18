## 📘 Section: Async Error Handling
### 🔹 Category: Async Error Handling
#### ✅ Answer 1056: Logging errors in asynchronous workflows

This example shows how to log errors in async functions and print messages for both success and error cases.

```rust
async fn log_error(e: &str) {
    println!("[ERROR] {}", e);
}

async fn may_fail(flag: bool) -> Result<(), &'static str> {
    if flag { Ok(()) } else { Err("failed!") }
}

#[tokio::main]
async fn main() {
    for i in 0..3 {
        match may_fail(i % 2 == 0).await {
            Ok(_) => println!("Task {} succeeded", i),
            Err(e) => log_error(e).await,
        }
    }
}
```

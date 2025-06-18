## 📘 Section: Async Patterns in Practice
### 🔹 Category: Building resilient async network clients
#### ✅ Answer 1156: Building resilient async network clients

This answer demonstrates how to build a resilient async HTTP client with retry and timeout logic using `reqwest` and `tokio`.

```rust
use reqwest::Error;
use tokio::time::{sleep, Duration};

async fn fetch_with_retry(url: &str, retries: u32) -> Result<String, Error> {
    for attempt in 0..retries {
        let res = tokio::time::timeout(Duration::from_secs(2), reqwest::get(url)).await;
        match res {
            Ok(Ok(resp)) => return resp.text().await,
            _ => sleep(Duration::from_millis(500 * (attempt + 1) as u64)).await,
        }
    }
    Err(reqwest::Error::new(reqwest::StatusCode::REQUEST_TIMEOUT, "All retries failed"))
}

#[tokio::main]
async fn main() {
    match fetch_with_retry("https://www.rust-lang.org", 3).await {
        Ok(body) => println!("Response: {}", &body[..50.min(body.len())]),
        Err(e) => println!("Error: {}", e),
    }
}
```

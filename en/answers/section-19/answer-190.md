## 📘 Section: Concurrency and Multithreading  
### 🔹 Category: Async Programming  
#### ✅ Answer 190: Writing an async function in Rust

This example shows how to write and call an async function using `reqwest` and `tokio`.

```rust
use reqwest;

#[tokio::main]
async fn main() {
    let body = fetch_url("https://www.rust-lang.org").await.unwrap();
    println!("{}", body);
}

async fn fetch_url(url: &str) -> Result<String, reqwest::Error> {
    let resp = reqwest::get(url).await?;
    resp.text().await
}
```

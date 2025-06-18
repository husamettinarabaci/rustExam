## 📘 Section: Actor Frameworks in Rust
### 🔹 Category: Integrating actors with external services
#### ✅ Answer 1130: Integrating actors with external services

An actor can asynchronously send requests to external services (e.g., HTTP APIs) using an async HTTP client.

```rust
use reqwest::Client;

struct HttpActor {
    client: Client,
}

impl HttpActor {
    async fn send_request(&self, url: &str) -> Result<String, reqwest::Error> {
        let resp = self.client.get(url).send().await?.text().await?;
        Ok(resp)
    }
}
```
This example shows an actor sending an HTTP request and handling the response.

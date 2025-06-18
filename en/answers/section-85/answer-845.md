## 📘 Section: Testing and Debugging
### 🔹 Category: Integration Testing with External Systems
#### ✅ Answer 845: Integration testing with external systems

Integration tests with external systems involve communicating with real databases or HTTP APIs. To keep tests isolated and repeatable, use test databases, mock servers, or test containers.

```rust
#[tokio::test]
async fn test_http_api_integration() {
    let resp = reqwest::get("https://httpbin.org/get").await.unwrap();
    assert!(resp.status().is_success());
}
```

This example sends a request to a real HTTP API. For isolation, prefer test environments or mock servers.

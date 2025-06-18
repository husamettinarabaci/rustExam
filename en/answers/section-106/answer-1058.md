## 📘 Section: Async Error Handling
### 🔹 Category: Async Error Handling
#### ✅ Answer 1058: Testing error scenarios in async code

This example shows how to write a unit test for an async function that can return an error, using `tokio::test` for async test support.

```rust
async fn may_fail(flag: bool) -> Result<&'static str, &'static str> {
    if flag {
        Ok("Success!")
    } else {
        Err("An error occurred")
    }
}

#[tokio::test]
async fn test_may_fail() {
    assert_eq!(may_fail(true).await.unwrap(), "Success!");
    assert!(may_fail(false).await.is_err());
}
```

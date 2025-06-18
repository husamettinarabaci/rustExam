## 📘 Section: Testing and Debugging
### 🔹 Category: Testing Async Code and Futures
#### ✅ Answer 848: Testing async code and futures

To test async functions in Rust, use macros like `#[tokio::test]` or `#[async_std::test]`, which start a runtime for the async test function.

```rust
#[tokio::test]
async fn test_async_add() {
    async fn add(a: i32, b: i32) -> i32 { a + b }
    let result = add(2, 3).await;
    assert_eq!(result, 5);
}
```

When testing async code, ensure the runtime is started and tests are isolated.

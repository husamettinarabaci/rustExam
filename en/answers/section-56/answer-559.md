## 📘 Section: Advanced Async Patterns  
### 🔹 Category: Testing async code effectively  
#### ✅ Answer 559: Testing async code effectively

This answer demonstrates how to write unit tests for async functions using test macros.

```rust
async fn add(a: i32, b: i32) -> i32 {
    a + b
}

#[cfg(test)]
mod tests {
    use super::*;
    #[tokio::test]
    async fn test_add() {
        assert_eq!(add(2, 3).await, 5);
    }
}
```

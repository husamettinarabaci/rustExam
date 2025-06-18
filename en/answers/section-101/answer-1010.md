## 📘 Section: Async Runtime and Task Management  
### 🔹 Category: Async Code Testing and Environment  
#### ✅ Answer 1010: Async code testing and environment

When testing async functions, the test function itself must be async. The `#[tokio::test]` macro allows async test functions to run automatically inside a runtime. Below is a simple async function and a unit test example.

```rust
async fn echo(msg: &str) -> String {
    msg.to_string()
}

#[cfg(test)]
mod tests {
    use super::*;

    #[tokio::test]
    async fn test_echo() {
        let result = echo("hello").await;
        assert_eq!(result, "hello");
    }
}
```

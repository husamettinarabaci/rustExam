## 📘 Section: Closures and Ownership  
### 🔹 Category: Closures and Async Functions  
#### ✅ Answer 248: Closures and async functions

Closures can be used with async functions, but must be `Send` if used across threads. You can pass closures to async functions as parameters.

```rust
async fn run<F, Fut>(f: F)
where
    F: Fn() -> Fut,
    Fut: std::future::Future<Output = ()>,
{
    f().await;
}

let closure = || async { println!("Hello async closure!"); };
// tokio::spawn(run(closure));
```

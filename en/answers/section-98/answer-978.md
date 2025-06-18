## 📘 Section: Profiling and Performance Tuning  
### 🔹 Category: Profiling Async Code and Futures  
#### ✅ Answer 978: Profiling async code and futures

In async Rust applications, tools like `tokio-console` can help identify bottlenecks. These tools visually show which futures or tasks take the most time.

Example usage:

Add to Cargo.toml:
```toml
[dependencies]
tokio = { version = "1", features = ["full"] }
tokio-console = "0.1"
```

In code:
```rust
#[tokio::main]
async fn main() {
    console_subscriber::init();
    // your async tasks here
}
```

In the terminal:
```
cargo run
```
With `tokio-console`, you can analyze which futures are slow.

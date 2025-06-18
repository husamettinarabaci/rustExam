## 📘 Section: Async Runtime Implementations
### 🔹 Category: Overview of popular Rust async runtimes (`tokio`, `async-std`)
#### ✅ Answer 861: Overview of popular Rust async runtimes (`tokio`, `async-std`)

The most common async runtimes in Rust are `tokio` and `async-std`. `tokio` offers high performance and a large ecosystem, while `async-std` provides a simpler, std-like API.

Tokio example:
```rust
#[tokio::main]
async fn main() {
    println!("Async with Tokio!");
}
```
Async-std example:
```rust
#[async_std::main]
async fn main() {
    println!("Async with async-std!");
}
```

`tokio` is often used in large projects, while `async-std` is preferred for lighter applications.

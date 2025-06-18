## 📘 Section: Rust in Cloud and Distributed Systems
### 🔹 Category: Microservices with Rust
#### ✅ Answer 938: Implementing distributed caching

Distributed caching stores frequently accessed data across multiple nodes, reducing latency and load on backend services. It is widely used in microservices and cloud systems for performance and scalability.

Rust applications can use crates like `redis` to interact with distributed caches. Example:

```rust
use redis::{Commands, Client};

fn cache_example() -> redis::RedisResult<()> {
    let client = Client::open("redis://127.0.0.1/")?;
    let mut con = client.get_connection()?;
    // Set a value
    con.set("key", "value")?;
    // Get a value
    let val: String = con.get("key")?;
    println!("Cached value: {}", val);
    Ok(())
}
```

Consistency can be managed with TTLs, versioning, or cache-coherence protocols. Invalidation strategies include time-based expiry, explicit deletion, or pub/sub notifications. Rust's error handling helps manage cache failures gracefully.

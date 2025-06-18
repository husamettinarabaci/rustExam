## 📘 Section: Async Networking and IO
### 🔹 Category: Async file IO and performance
#### ✅ Answer 1097: Async file IO and performance

This example uses Tokio to asynchronously read a large file and write it to another file, measuring the elapsed time for the operation.

```rust
use tokio::{fs::File, io::{AsyncReadExt, AsyncWriteExt}};
use std::time::Instant;

#[tokio::main]
async fn main() {
    let start = Instant::now();
    let mut src = File::open("source.txt").await.unwrap();
    let mut dst = File::create("target.txt").await.unwrap();
    let mut buf = [0; 8192];
    loop {
        let n = src.read(&mut buf).await.unwrap();
        if n == 0 { break; }
        dst.write_all(&buf[..n]).await.unwrap();
    }
    let elapsed = start.elapsed();
    println!("Elapsed time: {:?}", elapsed);
}
```

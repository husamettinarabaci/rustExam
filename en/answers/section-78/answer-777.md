## 📘 Section: Advanced Game Development  
### 🔹 Category: Performance tuning for real-time games  
#### ✅ Answer 777: Performance tuning for real-time games

This example measures FPS in a game loop and provides a simple optimization tip.

```rust
use std::time::{Instant, Duration};

fn main() {
    let mut frames = 0;
    let start = Instant::now();
    let duration = Duration::from_secs(1);
    while Instant::now() - start < duration {
        // Game logic here
        frames += 1;
    }
    println!("FPS: {}", frames);
    println!("To increase FPS, reduce unnecessary computations.");
}
```

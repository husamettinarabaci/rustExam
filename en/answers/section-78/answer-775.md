## 📘 Section: Advanced Game Development  
### 🔹 Category: Procedural content generation  
#### ✅ Answer 775: Procedural content generation

This example generates a simple 10x10 game map with random obstacles using Rust and prints it to the screen.

```rust
use rand::Rng;

fn main() {
    let mut rng = rand::thread_rng();
    let size = 10;
    for _ in 0..size {
        for _ in 0..size {
            let cell = if rng.gen_bool(0.2) { '#' } else { '.' };
            print!("{}", cell);
        }
        println!();
    }
}
```

## 📘 Section: Crates and External Packages  
### 🔹 Category: Using External Crates  
#### ✅ Answer 143: Using an external crate in code

To use an external crate in Rust, add it to your `Cargo.toml` and import it in your code. Here is how you use the `rand` crate to generate a random number between 1 and 10:

Add to `Cargo.toml`:
```toml
[dependencies]
rand = "0.8"
```

Rust code:
```rust
use rand::Rng;

fn main() {
    let mut rng = rand::thread_rng();
    let n: u32 = rng.gen_range(1..=10);
    println!("Random number: {}", n);
}
```

This example shows how to add, import, and use an external crate in a Rust project.

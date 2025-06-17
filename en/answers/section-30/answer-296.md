## 📘 Section: Modules and Crate Structure  
### 🔹 Category: External Dependencies  
#### ✅ Answer 296: Declaring external dependencies in `Cargo.toml`

In this example, the `rand` crate is added to the `Cargo.toml` file and used in the main file to generate a random number. External dependencies provide additional functionality and are declared in the `[dependencies]` section of `Cargo.toml`.

```toml
# Cargo.toml
[dependencies]
rand = "0.8"
```

```rust
// main.rs
fn main() {
    let number: u8 = rand::random();
    println!("Random number: {}", number);
}
```

## 📘 Section: Modules I  
### 🔹 Category: Splitting Code into Multiple Files  
#### ✅ Answer 123: Splitting code into multiple files

To split code into multiple files in Rust, declare the module in your main file and place its implementation in a separate file. Here, `utils` is defined in `utils.rs` and included in `main.rs` with `mod utils;`.

**main.rs:**
```rust
mod utils;

fn main() {
    utils::greet();
}
```

**utils.rs:**
```rust
pub fn greet() {
    println!("Hello from utils!");
}
```

## 📚 Section: Modules and Visibility  
### 🔹 Category: Module Files  
#### ✅ Answer 87: Splitting modules into files

**Explanation:**
Modules can be split into separate files. In `main.rs`, use `mod mymod;` to include `mymod.rs` or `mymod/mod.rs`.

```rust
// main.rs
mod mymod;

fn main() {
    mymod::hello();
}

// mymod.rs
pub fn hello() {
    println!("Hello from file");
}
```

## 📘 Section: Modules and Packages  
### 🔹 Category: External Crates  
#### ✅ Answer 137: Using external crates

**Explanation:**
Add the crate to `Cargo.toml` under `[dependencies]` and use it in your code.

```toml
[dependencies]
rand = "0.8"
```
```rust
use rand::Rng;
let n = rand::thread_rng().gen_range(1..10);
```

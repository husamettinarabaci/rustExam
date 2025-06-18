## 📘 Section: Synchronization Primitives Deep Dive
### 🔹 Category: Lazy initialization with `OnceCell` and `Lazy`
#### ✅ Answer 1136: Lazy initialization with `OnceCell` and `Lazy`

`OnceCell` and `Lazy` allow a value to be initialized only on first access.

```rust
use once_cell::sync::Lazy;

static CONFIG: Lazy<String> = Lazy::new(|| {
    println!("Initializing...");
    "Settings".to_string()
});

fn main() {
    println!("{}", *CONFIG);
}
```
In this example, `CONFIG` is initialized on first access.

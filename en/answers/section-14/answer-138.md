## 📘 Section: Modules II  
### 🔹 Category: Importing multiple items  
#### ✅ Answer 138: Importing multiple items

You can import multiple items from a module in Rust using a single `use` statement. You can also rename items as needed. Example:

```rust
mod math {
    pub fn add(a: i32, b: i32) -> i32 {
        a + b
    }
    pub fn sub(a: i32, b: i32) -> i32 {
        a - b
    }
}

use math::{add, sub as subtract};

fn main() {
    println!("3 + 2 = {}", add(3, 2));
    println!("3 - 2 = {}", subtract(3, 2));
}
```

- Both `add` and `sub` are imported from `math`.
- `sub` is renamed to `subtract`.
- You can call both functions directly in `main`.

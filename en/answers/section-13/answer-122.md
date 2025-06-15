## 📘 Section: Modules I  
### 🔹 Category: Module Organization  
#### ✅ Answer 122: Using `mod` and `use` for organization

**Explanation:**
You can organize your Rust code by declaring modules with `mod` and bringing items into scope with `use`. Here, the `math` module defines an `add` function. The `use` statement allows calling `add` directly in `main`.

```rust
mod math {
    pub fn add(a: i32, b: i32) -> i32 {
        a + b
    }
}

use math::add;

fn main() {
    let result = add(3, 4);
    println!("Sum: {}", result);
}
```

## 📘 Section: Modules I  
### 🔹 Category: Module Re-exports  
#### ✅ Answer 127: Module re-exports

You can re-export items from a module using `pub use`. This allows external code to access the item directly, without specifying the module path. Here, `add` is re-exported from the `math` module and called directly in `main`.

```rust
mod math {
    pub fn add(a: i32, b: i32) -> i32 {
        a + b
    }
}

pub use math::add;

fn main() {
    let result = add(2, 3);
    println!("Sum: {}", result);
}
```

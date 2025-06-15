## 📘 Section: Modules I  
### 🔹 Category: Accessing Items from Another Module  
#### ✅ Answer 124: Accessing items from another module

To access a function from another module, use the module path. Here, the `math` module defines a public `square` function, which is called from `main` using `math::square`.

```rust
mod math {
    pub fn square(x: i32) -> i32 {
        x * x
    }
}

fn main() {
    let value = 5;
    let result = math::square(value);
    println!("Square: {}", result);
}
```

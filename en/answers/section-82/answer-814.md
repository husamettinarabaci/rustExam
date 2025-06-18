## 📘 Section: Advanced Macro Design  
### 🔹 Category: Ensuring macro hygiene and avoiding collisions  
#### ✅ Answer 814: Ensuring macro hygiene and avoiding collisions

Below is an example of a hygienic macro where variables defined inside the macro do not collide with those outside.

```rust
macro_rules! hygienic_sum {
    ($a:expr, $b:expr) => {{
        let result = $a + $b;
        result
    }}
}

fn main() {
    let result = 10;
    let sum = hygienic_sum!(2, 3);
    println!("{} {}", result, sum); // 10 5
}
```

The `result` variable inside the macro does not conflict with the outer `result`. Rust macros are hygienic and names are isolated.

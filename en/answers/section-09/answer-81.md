## 📚 Section: Modules and Visibility  
### 🔹 Category: Modules  
#### ✅ Answer 81: Creating and using modules

**Explanation:**
Modules organize code into namespaces. You can define functions inside modules and call them using the module path.

```rust
mod math {
    pub fn add(a: i32, b: i32) -> i32 {
        a + b
    }
}

fn main() {
    let sum = math::add(2, 3);
    println!("{}", sum);
}
```

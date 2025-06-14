## 📚 Section: Traits  
### 🔹 Category: Deriving Traits  
#### ✅ Answer 96: Deriving standard traits

**Explanation:**
You can derive standard traits like `Debug`, `Clone`, and `PartialEq` for your structs.

```rust
#[derive(Debug, Clone, PartialEq)]
struct Point {
    x: i32,
    y: i32,
}

fn main() {
    let p1 = Point { x: 1, y: 2 };
    let p2 = p1.clone();
    println!("{:?}", p2);
    println!("Equal? {}", p1 == p2);
}
```

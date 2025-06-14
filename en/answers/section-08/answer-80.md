## 📚 Section: Generics  
### 🔹 Category: Lifetime Parameters  
#### ✅ Answer 80: Using lifetime parameters with generics

**Explanation:**
Lifetime parameters ensure references are valid for the required scope, even with generics.

```rust
fn get_first<'a, T>(slice: &'a [T]) -> &'a T {
    &slice[0]
}

fn main() {
    let arr = [1, 2, 3];
    println!("{}", get_first(&arr));
}
```

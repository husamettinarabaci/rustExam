## 📚 Section: Collections  
### 🔹 Category: Slices  
#### ✅ Answer 64: Working with slices

**Explanation:**
Slices let you reference a part of an array without copying it.

```rust
fn main() {
    let arr = [1, 2, 3, 4, 5];
    let slice = &arr[1..4];
    for x in slice {
        println!("{}", x);
    }
}
```

## 📚 Section: Collections  
### 🔹 Category: Vectors  
#### ✅ Answer 61: Creating and using a vector

**Explanation:**
Vectors are growable arrays. You can add elements with `push` and iterate with a loop.

```rust
fn main() {
    let mut v = Vec::new();
    v.push(1);
    v.push(2);
    v.push(3);
    for x in &v {
        println!("{}", x);
    }
}
```

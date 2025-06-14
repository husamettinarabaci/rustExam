## 📚 Section: Generics  
### 🔹 Category: Generic Enums  
#### ✅ Answer 73: Creating a generic enum

**Explanation:**
Generic enums can represent values of any type. `Option<T>` is a common example.

```rust
enum MyOption<T> {
    Some(T),
    None,
}

fn main() {
    let x = MyOption::Some(10);
    let y: MyOption<i32> = MyOption::None;
}
```

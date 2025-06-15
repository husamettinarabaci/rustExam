## 📘 Section: Closures and Iterator Basics  
### 🔹 Category: Using `any` and `all`  
#### ✅ Answer 239: Using `any` and `all` with Iterators

This solution demonstrates how to use the `any` and `all` methods on iterators. `any` returns `true` if any element matches the predicate, while `all` returns `true` only if all elements match the predicate.

```rust
fn main() {
    let numbers = vec![10, 20, -5, 30, 40];

    let has_negative = numbers.iter().any(|&x| x < 0);
    let all_less_than_100 = numbers.iter().all(|&x| x < 100);

    println!("Any negative? {}", has_negative);
    println!("All less than 100? {}", all_less_than_100);
}
```

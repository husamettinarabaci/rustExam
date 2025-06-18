## 📘 Section: Variables, Constants, and Types  
### 🔹 Category: Tuples  
#### ✅ Answer 12: Assigning values via tuple destructuring

**Explanation:**

Tuple destructuring allows you to assign each element of a tuple to its own variable in a single statement.

```rust
fn main() {
    let tup = (10, 2.5, 'z');
    let (a, b, c) = tup;
    println!("a: {}", a);
    println!("b: {}", b);
    println!("c: {}", c);
}
```

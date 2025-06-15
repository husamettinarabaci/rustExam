## 📘 Section: Functions II  
### 🔹 Category: Recursion  
#### ✅ Answer 58: Function with recursion

**Explanation:**
Recursive functions call themselves to solve problems. Here, a recursive function computes the factorial of a number.

```rust
fn factorial(n: u32) -> u32 {
    if n == 0 { 1 } else { n * factorial(n - 1) }
}

fn main() {
    let result = factorial(5);
    println!("Factorial: {}", result); // Output: Factorial: 120
}
```

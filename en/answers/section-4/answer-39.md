## 📘 Section: I/O Basics  
### 🔹 Category: Input Processing  
#### ✅ Answer 39: Reading input into a vector

**Explanation:**

You can split the input string and parse each part into a vector of integers.

```rust
use std::io;

fn main() {
    let mut input = String::new();
    println!("Enter numbers separated by spaces:");
    io::stdin().read_line(&mut input).expect("Failed to read line");
    let numbers: Vec<i32> = input.split_whitespace()
        .map(|s| s.parse().expect("Invalid number"))
        .collect();
    println!("Vector: {:?}", numbers);
}
```

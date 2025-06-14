## 📘 Section: I/O Basics  
### 🔹 Category: Error Handling  
#### ✅ Answer 33: Handling input errors gracefully

**Explanation:**

You can use `match` to handle parsing errors gracefully instead of panicking.

```rust
use std::io;

fn main() {
    let mut input = String::new();
    println!("Enter a number:");
    io::stdin().read_line(&mut input).expect("Failed to read line");
    match input.trim().parse::<i32>() {
        Ok(num) => println!("You entered: {}", num),
        Err(_) => println!("Invalid input! Please enter a valid number."),
    }
}
```

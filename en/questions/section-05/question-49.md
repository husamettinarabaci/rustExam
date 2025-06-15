## 📘 Section: Functions I  
### 🔹 Category: Function Return Types  
#### ❓ Question 49: Function that returns a tuple

Write a Rust function that returns a tuple of two values.

- Define a function named `get_point` that returns a tuple `(i32, i32)`.
- The function should return the values `(3, 4)`.
- In the `main` function, call `get_point` and print the result.

```rust
// Define the function `get_point` that returns a tuple of two i32 values
fn get_point() -> (i32, i32) {
    // Return the tuple (3, 4)
    (3, 4)
}

fn main() {
    // Call the `get_point` function and store the result
    let point = get_point();
    
    // Print the result
    println!("The point is: {:?}", point);
}
```

🔧 **Task:** Show how to return and use a tuple from a function in Rust.

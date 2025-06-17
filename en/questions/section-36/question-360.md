## 📘 Section: Closures and Functional Techniques  
### 🔹 Category: Capturing and mutating variables with move closures  
#### ❓ Question 360: Capturing and mutating variables with move closures

Write a Rust program that does the following:

- Create a vector of integers.
- Define a closure using the `move` keyword to capture ownership of the vector.
- Inside the closure, mutate the first element of the vector.
- Call the closure to apply the mutation.
- Demonstrate that the original vector can no longer be used after the closure (move semantics).

🔧 **Task:** Demonstrate capturing ownership and mutating variables inside a `move` closure, and show that the original variable is no longer accessible after the move.

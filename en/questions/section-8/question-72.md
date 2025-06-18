## 📘 Section: Lifetimes I  
### 🔹 Category: Lifetime with Multiple References  
#### ❓ Question 72: Lifetime with multiple references

Write a Rust function that takes two string slices with different lifetimes and returns the longer one. Annotate the function signature with the appropriate lifetime parameters to ensure it compiles.

- Define a function that accepts two `&str` parameters with potentially different lifetimes.
- Use lifetime annotations to specify the relationship between the input and output lifetimes.
- Return the longer string slice.
- Demonstrate usage in `main`.

🔧 **Task:** Show how to use multiple lifetime annotations in a function signature to safely return a reference.

## 📘 Section: Smart Pointers and Interior Mutability  
### 🔹 Category: Smart Pointer Performance Comparison  
#### ❓ Question 279: Comparing performance of Box, Rc, and Arc

Write a Rust program that does the following:

- Create three different data structures, each wrapping a vector of 100,000 integers using `Box`, `Rc`, and `Arc` smart pointers.
- For each smart pointer, measure the time taken to access and sum the elements of the vector.
- Compare the results and observe which smart pointer is faster for read operations.

🔧 **Task:** Use `std::time::Instant` to benchmark and compare the read performance of vectors wrapped in `Box`, `Rc`, and `Arc`.

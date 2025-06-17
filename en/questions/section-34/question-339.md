## 📘 Section: Collections and Iterators
### 🔹 Category: Lazy vs eager evaluation in iterator pipelines
#### ❓ Question 339: Lazy and eager evaluation in iterator pipelines

Write a Rust program that does the following:

- Create a vector of integers.
- Chain iterator adaptors like `map` and `filter`, but show that no computation happens until the output is consumed.
- Use `collect` to gather the results into a collection and demonstrate that computations occur at that point.
- Explain the difference between lazy and eager evaluation in code.

🔧 **Task:** Create an example that demonstrates how iterator adaptors are lazy and only perform work when a consumer (`collect`, `for`, etc.) is called.

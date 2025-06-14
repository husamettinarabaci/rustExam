## 📘 Section: Error Handling and Result Types  
### 🔹 Category: The `?` Operator  
#### ❓ Question 172: Propagating errors with the `?` operator

Write a function that reads a file and returns its contents as a `String`. Use the `?` operator to propagate errors.

- Define a function named `read_file_contents` that takes a file path as a parameter.
- Use `std::fs::read_to_string` and the `?` operator.
- Return a `Result<String, std::io::Error>`.

🔧 **Task:** Use the `?` operator to simplify error propagation in file reading.

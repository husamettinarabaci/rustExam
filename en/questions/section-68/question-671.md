## 📘 Section: Advanced Error Handling and Recovery
### 🔹 Category: Designing custom error enums with detailed variants
#### ❓ Question 671: Designing custom error enums with detailed variants

Write a Rust program that demonstrates how to design a custom error enum with multiple detailed variants:

- Define an enum called `AppError` with at least three variants, each representing a different error scenario (e.g., NotFound, InvalidInput, IoError).
- Implement the `std::fmt::Display` trait for your error enum to provide user-friendly error messages.
- Optionally, implement the `std::error::Error` trait for your enum.
- Show how to use your custom error type in a function that can return different error variants.

🔧 **Task:** Model application errors using a custom enum and demonstrate its use in error handling.

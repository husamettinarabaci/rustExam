## 📘 Section: Enums, Variants, and Algebraic Data Types  
### 🔹 Category: Modeling with Algebraic Data Types  
#### ❓ Question 308: Using #[non_exhaustive] for Forward Compatibility

Use the `#[non_exhaustive]` attribute to allow adding new variants to an enum in the future:

- Define an enum representing different error types (e.g., FileError, ConnectionError).
- Add the `#[non_exhaustive]` attribute to the enum.
- Use a `match` statement to pattern match on the enum and produce output for each variant.
- Use a default (`_`) arm to make your code robust against future variants.

🔧 **Task:** Define an error enum with `#[non_exhaustive]` and demonstrate a match statement with a wildcard arm for forward compatibility.

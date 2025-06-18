## 📘 Section: Trait Objects and VTable Mechanics
### 🔹 Category: Demonstrating Object Safety Rules and Violations
#### ❓ Question 739: Demonstrating object safety rules and their violations

Write a Rust example that shows what makes a trait object-safe and what causes a trait to be not object-safe.

- Define a trait that is not object-safe (e.g., with a generic method or `Self` in method signatures).
- Attempt to use it as a trait object and observe the compiler error.
- Fix the trait to make it object-safe.

🔧 **Task:** Explain and demonstrate the rules for object safety in Rust trait objects.

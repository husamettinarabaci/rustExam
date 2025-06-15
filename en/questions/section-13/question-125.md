## 📘 Section: Modules I  
### 🔹 Category: Module Visibility Basics  
#### ❓ Question 125: Module visibility basics

Write a Rust program that demonstrates the basics of module visibility.

- Create a module named `shapes` with two functions: a public function `area` and a private function `perimeter`.
- The `area` function should return a fixed value (e.g., 10).
- The `perimeter` function should return a fixed value (e.g., 20).
- In the main function, call `shapes::area()` and print the result.
- Attempting to call `shapes::perimeter()` from `main` should result in a compile error (explain this in a comment).

🔧 **Task:** Show how public and private functions work in a Rust module and how visibility affects access from outside the module.

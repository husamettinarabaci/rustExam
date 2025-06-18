## 📘 Section: Embedded Domain-Specific Languages (DSLs)
### 🔹 Category: DSL Syntax Parsing
#### ❓ Question 1262: Parsing DSL syntax using `syn` and `quote`

Write a Rust procedural macro that parses a custom DSL syntax using the `syn` and `quote` crates.

- Create a procedural macro that takes a simple arithmetic expression as input (e.g., `dsl!(1 + 2 * 3)`).
- Use `syn` to parse the input tokens and `quote` to generate Rust code.
- Show how to use the macro in a function and print the result.

🔧 **Task:** Implement a procedural macro that parses and expands a simple arithmetic DSL using `syn` and `quote`.

## 📘 Section: DSLs for Complex Domains
### 🔹 Category: DSL Design and Usage
#### ✅ Answer 1462: DSLs for data transformation pipelines

A DSL for data transformation pipelines allows chaining operations symbolically. For example, you can apply a sequence of transformations to data. The DSL defines each operation, and the pipeline applies them in order.

```rust
// Example DSL:
// input | trim | to_uppercase | replace("FOO", "BAR")

// Simple parser and application:
fn apply_pipeline(input: &str) -> String {
    input.trim().to_uppercase().replace("FOO", "BAR")
}
```

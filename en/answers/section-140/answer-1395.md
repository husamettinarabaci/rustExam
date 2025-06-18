## 📘 Section: Architectural Refactoring and Evolution  
### 🔹 Category: Architectural Refactoring and Evolution  
#### ✅ Answer 1395: Designing for backward compatibility

Backward compatibility means that old code or APIs continue to work with new versions. To maintain compatibility in Rust projects:

- Mark old functions as deprecated instead of removing them (e.g., `#[deprecated]`).
- Provide default values when adding new parameters.
- Preserve old behavior in APIs when possible.

Example:
```rust
#[deprecated]
fn old_function() {}

fn new_function() {}
```
These methods help users migrate to new versions without breaking their code immediately.

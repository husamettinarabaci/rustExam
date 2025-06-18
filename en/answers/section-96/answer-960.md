## 📘 Section: Advanced Testing and Formal Verification  
### 🔹 Category: Documenting Test Cases and Coverage  
#### ✅ Answer 960: Documenting test cases and coverage

Test documentation clearly states which cases are tested and what the coverage is. In Rust, this can be done by adding descriptive comments to test functions or by maintaining a separate documentation file.

```rust
/// Tests for the add function:
/// - Positive numbers
/// - Negative numbers
/// - Zero
#[test]
fn test_add_cases() {
    assert_eq!(add(2, 3), 5); // Positive
    assert_eq!(add(-2, -3), -5); // Negative
    assert_eq!(add(0, 0), 0); // Zero
}
```
This way, test coverage and cases can be easily tracked.

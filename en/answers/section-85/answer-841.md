## 📘 Section: Testing and Debugging
### 🔹 Category: Property-Based Testing
#### ✅ Answer 841: Writing property-based tests with `proptest`

The `proptest` crate allows you to test properties of functions with a wide range of automatically generated inputs. In property-based testing, you specify a property that should always hold. If the test fails, `proptest` tries to find the smallest failing input.

```rust
use proptest::prelude::*;

// Function under test: addition
fn add(a: i32, b: i32) -> i32 {
    a + b
}

proptest! {
    #[test]
    fn test_addition_commutative(a in -1000..1000, b in -1000..1000) {
        prop_assert_eq!(add(a, b), add(b, a));
    }
}
```

This example tests that addition is commutative. If the property fails, `proptest` will shrink the input to the minimal failing case.

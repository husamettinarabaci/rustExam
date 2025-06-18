## 📘 Section: Testing and Debugging
### 🔹 Category: Testing Unsafe Code Coverage
#### ✅ Answer 844: Testing unsafe code coverage

To ensure the safety of code with `unsafe` blocks, you should write comprehensive tests covering both expected and edge cases. Rust's test framework allows you to test both safe and unsafe paths.

```rust
fn get_unchecked(arr: &[i32], idx: usize) -> i32 {
    unsafe { *arr.get_unchecked(idx) }
}

#[test]
fn test_get_unchecked_safe() {
    let arr = [1, 2, 3];
    assert_eq!(get_unchecked(&arr, 1), 2);
}

#[test]
#[should_panic]
fn test_get_unchecked_out_of_bounds() {
    let arr = [1, 2, 3];
    // This line will cause an out-of-bounds access and may panic.
    get_unchecked(&arr, 10);
}
```

This example tests both safe and unsafe paths. Use `should_panic` for out-of-bounds or error cases.

## 📘 Section: Testing and Debugging  
### 🔹 Category: Running and Filtering Tests  
#### ✅ Answer 344: Running tests with `cargo test` and filtering by name

In Rust, you can run all tests using the `cargo test` command. To run only a specific test function, provide its name as a filter. The test output will show which tests passed or failed.

```bash
# Run all tests
cargo test

# Run only a specific test (e.g., test_add_positive)
cargo test test_add_positive
```

Example test output:

```
test tests::test_add_positive ... ok
test tests::test_add_negative ... ok

test result: ok. 2 passed; 0 failed; 0 ignored; 0 measured; 0 filtered out
```

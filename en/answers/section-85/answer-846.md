## 📘 Section: Testing and Debugging
### 🔹 Category: Measuring Test Coverage with `cargo tarpaulin`
#### ✅ Answer 846: Measuring test coverage with `cargo tarpaulin`

`cargo tarpaulin` is used to measure how much of your Rust code is covered by tests. It helps identify untested code so you can add more tests to improve coverage.

Basic usage:

```sh
cargo install cargo-tarpaulin
cargo tarpaulin --out Html
```

This command generates an HTML coverage report, showing which lines are tested and which are not. Add tests for uncovered lines to increase coverage.

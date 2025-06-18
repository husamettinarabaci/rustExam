## 📘 Section: Macro Rules and Declarative Macros  
### 🔹 Category: Macros for testing and benchmarking code  
#### ✅ Answer 689: Macros for testing and benchmarking code

This problem demonstrates writing a macro to generate test functions. The macro creates a test function with the given name.

```rust
macro_rules! make_test {
    ($name:ident, $body:block) => {
        #[test]
        fn $name() $body
    };
}

make_test!(my_test, {
    assert_eq!(2 + 2, 4);
});
```
This macro makes it easy to define new test functions.

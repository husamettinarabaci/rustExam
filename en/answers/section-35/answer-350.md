## 📘 Section: Testing and Debugging
### 🔹 Category: Test Isolation and Side Effects
#### ✅ Answer 350: Understanding test isolation and side effects

Test isolation means that each test runs independently and does not affect or depend on other tests. Side effects, such as modifying global state or the file system, can cause tests to interfere with each other, especially since Rust runs tests in parallel by default.

Example of a test with side effects:

```rust
static mut COUNTER: u32 = 0;

#[test]
fn test_increment() {
    unsafe { COUNTER += 1; }
    assert!(unsafe { COUNTER } > 0);
}

#[test]
fn test_reset() {
    unsafe { COUNTER = 0; }
    assert_eq!(unsafe { COUNTER }, 0);
}
```

Example of an isolated test:

```rust
#[test]
fn test_add() {
    let mut value = 0;
    value += 1;
    assert_eq!(value, 1);
}
```

In isolated tests, each test uses its own data and is not affected by others.

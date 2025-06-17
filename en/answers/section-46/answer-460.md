## 📘 Section: Testing and Debugging  
### 🔹 Category: Test Isolation and Side Effects  
#### ✅ Answer 460: Understanding test isolation and side effects

Test isolation ensures that tests run independently. Side effects (e.g., global variables, file system changes) can make tests unreliable.

```rust
static mut COUNTER: i32 = 0;

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn test_one() {
        unsafe { COUNTER += 1; }
        assert_eq!(unsafe { COUNTER }, 1);
    }
    #[test]
    fn test_two() {
        unsafe { COUNTER += 1; }
        assert_eq!(unsafe { COUNTER }, 1); // This test may fail!
    }
}
```

To avoid side effects, each test should be independent.

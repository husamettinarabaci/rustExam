## 📘 Section: Testing and Debugging  
### 🔹 Category: Panic Tests  
#### ✅ Answer 454: Testing for panics with `#[should_panic]`

The `#[should_panic]` attribute expects the test to end with a panic. If no panic occurs, the test fails.

```rust
fn will_panic() {
    panic!("This always panics!");
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    #[should_panic]
    fn test_panic() {
        will_panic();
    }
}
```

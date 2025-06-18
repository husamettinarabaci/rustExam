## 📘 Section: Advanced Testing and Formal Verification  
### 🔹 Category: Testing Soundness of Unsafe Code  
#### ✅ Answer 957: Testing soundness of unsafe code

Unsafe code disables some of Rust's safety guarantees and must be tested carefully. The `miri` tool can be used to detect undefined behavior in unsafe code.

```rust
unsafe fn add_one(ptr: *mut i32) {
    *ptr += 1;
}

#[cfg(test)]
mod tests {
    use super::*;
    #[test]
    fn test_add_one() {
        let mut x = 5;
        unsafe { add_one(&mut x as *mut i32); }
        assert_eq!(x, 6);
    }
}
```
With `cargo miri test`, these tests can be analyzed for undefined behavior.

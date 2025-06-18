## 📘 Section: Advanced Testing and Formal Verification  
### 🔹 Category: Property-based testing with quickcheck  
#### ✅ Answer 951: Property-based testing with quickcheck

The `quickcheck` crate is used to test that functions satisfy certain properties for all kinds of input. In the example below, we test that addition is commutative (a + b == b + a).

```rust
#[cfg(test)]
mod tests {
    use quickcheck::quickcheck;

    #[test]
    fn prop_addition_commutative() {
        quickcheck(|a: i32, b: i32| a + b == b + a);
    }
}
```
This test will automatically check the commutative property for many random values of `a` and `b`.

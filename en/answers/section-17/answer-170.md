## 📘 Section: Advanced Patterns  
### 🔹 Category: Matching on References and Dereferencing in Patterns  
#### ✅ Answer 170: Matching on references and dereferencing in patterns

In Rust, you can match on references by using patterns like `&val` to destructure a reference and access its value. You can also match directly on a reference variable. This is useful when working with borrowed data.

```rust
let x = 42;
let r = &x;

match r {
    &val => println!("Matched by dereferencing: {}", val),
}

match r {
    val_ref => println!("Matched as reference: {}", val_ref),
}
```

- In the first match, `&val` pattern dereferences the reference and binds the value to `val`.
- In the second match, `val_ref` is a reference to the value, so you can use `*val_ref` to access the value if needed.

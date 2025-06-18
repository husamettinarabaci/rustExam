## 📘 Section: Unsafe Code Patterns and Safety
### 🔹 Category: Understanding Aliasing Rules and Undefined Behavior
#### ✅ Answer 655: Understanding aliasing rules and undefined behavior

Aliasing occurs when two or more pointers reference the same memory. In Rust, mutable and immutable references must not alias. Violating this can cause undefined behavior.

```rust
fn main() {
    let mut x = 5;
    let r1 = &mut x as *mut i32;
    let r2 = &x as *const i32;
    unsafe {
        *r1 = 10; // Mutate
        println!("{}", *r2); // Reading via immutable pointer
    }
}
```

This is only safe if you ensure no mutable and immutable access overlap. Always follow Rust's aliasing rules.

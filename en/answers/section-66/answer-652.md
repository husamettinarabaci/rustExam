## 📘 Section: Unsafe Code Patterns and Safety
### 🔹 Category: Using `unsafe` Blocks to Dereference Raw Pointers
#### ✅ Answer 652: Using `unsafe` blocks to dereference raw pointers

Raw pointers (`*const T`, `*mut T`) can only be dereferenced in an `unsafe` block. This is required because the compiler cannot guarantee their validity or alignment.

```rust
fn main() {
    let x = 42;
    let ptr = &x as *const i32;
    unsafe {
        println!("{}", *ptr); // Safe because ptr is valid and in scope
    }
}
```

Dereferencing invalid or dangling pointers is undefined behavior. Always ensure the pointer is valid and properly aligned before dereferencing.

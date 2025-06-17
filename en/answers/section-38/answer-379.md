## 📘 Section: Ownership Across Function Boundaries  
### 🔹 Category: Understanding ownership of slices and references  
#### ✅ Answer 379: Understanding ownership of slices and references

Slices and references do not own the data they point to; they only provide temporary access. When you create a slice from a vector and pass it as a reference to a function, the vector's ownership is not transferred, and you can still use the vector after the function call.

```rust
fn print_slice(slice: &[i32]) {
    println!("Slice: {:?}", slice);
}

fn main() {
    let numbers = vec![1, 2, 3, 4, 5];
    let slice = &numbers[1..4];
    print_slice(slice);
    println!("Original vector: {:?}", numbers); // The vector is still usable
}
```

Here, the `print_slice` function only borrows the slice, not its ownership. Therefore, the `numbers` vector remains valid after the function call.

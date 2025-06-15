## 📘 Section: Collections: Vectors  
### 🔹 Category: Slicing and Indexing  
#### ✅ Answer 156: Slicing a vector

To create a slice from a vector in Rust, you use the slice syntax (`&vector[start..end]`). Slices are references to a contiguous sequence of elements in a collection. Here, we create a vector, obtain a slice of its elements, and print both.

```rust
fn main() {
    let numbers = vec![10, 20, 30, 40, 50];
    let slice = &numbers[1..4]; // elements at indices 1, 2, 3
    println!("Original vector: {:?}", numbers);
    println!("Slice: {:?}", slice);
}
```

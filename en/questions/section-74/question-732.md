## 📘 Section: Trait Objects and VTable Mechanics  
### 🔹 Category: Trait Objects and Memory Layout  
#### ❓ Question 732: Understanding the memory layout of a fat pointer (data + vtable)

Write a Rust program and explanation that demonstrates:

- What a fat pointer is in the context of trait objects.
- How a `&dyn Trait` or `Box<dyn Trait>` contains both a data pointer and a vtable pointer.
- Use `std::mem::size_of` to show the size difference between a reference to a concrete type and a reference to a trait object.

🔧 **Task:** Illustrate the structure and size of fat pointers for trait objects in Rust.

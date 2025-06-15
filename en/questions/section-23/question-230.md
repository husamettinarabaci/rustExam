## 📘 Section: Generics II  
### 🔹 Category: Generic Const Parameters  
#### ❓ Question 230: Using Generic Const Parameters in Structs

Write a Rust struct that uses a generic const parameter:

- Define a struct `ArrayHolder` that takes a type parameter `T` and a const parameter `N` (an integer).
- The struct should contain a field that is an array of type `[T; N]`.
- Implement a constructor function `new` that takes an array of `[T; N]` and returns an `ArrayHolder<T, N>`.
- Demonstrate creating an `ArrayHolder` for `i32` with length 4.

🔧 **Task:** Use generic const parameters to define a struct that can hold arrays of any type and size, and show how to instantiate it.

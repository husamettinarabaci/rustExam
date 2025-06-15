## 📘 Section: Generics II  
### 🔹 Category: Generic enums with lifetimes  
#### ❓ Question 226: Defining a generic enum with lifetime parameters

Write a Rust enum that demonstrates the use of both generic type parameters and explicit lifetime parameters.

- Define an enum `RefOrValue` with two variants:
  - `Ref(&'a T)` that holds a reference to a value of type `T` with lifetime `'a`.
  - `Val(T)` that holds an owned value of type `T`.
- Implement a method `get` that returns a reference to the value, regardless of the variant.

🔧 **Task:** Use both a generic type parameter and a lifetime parameter in an enum definition and implement a method for it.

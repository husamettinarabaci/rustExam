## 📘 Section: Smart Pointers and Interior Mutability  
### 🔹 Category: Reference Cycles and Prevention  
#### ❓ Question 280: Understanding and preventing reference cycles

Write a Rust program that does the following:

- Use `Rc` and `RefCell` to create two nodes that reference each other, forming a cycle.
- Explain why this reference cycle can cause a memory leak.
- Show how to prevent the cycle by using `Weak` references in the same structure.

🔧 **Task:** Demonstrate, with code and explanation, how reference cycles occur in Rust and how to prevent them using `Weak` references.

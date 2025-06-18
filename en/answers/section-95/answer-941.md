## 📘 Section: Metaprogramming and Reflection
### 🔹 Category: Reflection in Rust
#### ✅ Answer 941: Limitations of reflection in Rust

Reflection allows programs to inspect and modify their own structure at runtime, common in languages like Java and C#. Rust does not support full runtime reflection due to its focus on safety, performance, and static analysis.

Rust's type system is resolved at compile time, and type information is not retained at runtime. This prevents dynamic inspection or modification of types and fields. Instead, Rust uses traits, generics, and macros for compile-time metaprogramming.

Trade-offs: Rust gains performance and safety but loses some dynamic flexibility. Developers use traits for polymorphism and macros for code generation, achieving many goals of reflection without runtime cost or safety risks.

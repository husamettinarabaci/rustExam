## 📘 Section: Compiler Plugins and Custom Lints  
### 🔹 Category: MIR Transformations  
#### ✅ Answer 829: Understanding MIR transformations

MIR (Mid-level Intermediate Representation) is an intermediate form used by the Rust compiler for optimizations and analysis. MIR transformations are changes made to this representation. For example, a "dead code elimination" pass removes unused code at the MIR level. Advanced users can fork the Rust compiler to add custom MIR passes.

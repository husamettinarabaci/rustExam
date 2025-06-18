## 📘 Section: Compiler Internals and Language Design  
### 🔹 Category: Understanding HIR and MIR transformations  
#### ✅ Answer 962: Understanding HIR and MIR transformations

HIR (High-level Intermediate Representation) is a simplified, analysis-friendly version of Rust code. MIR (Mid-level Intermediate Representation) is a lower-level form used for optimizations and borrow checking.

For example, `let x = a + b;` is first converted to HIR, which preserves the structure, and then to MIR, which focuses on control flow and data movement. MIR is where the compiler performs safety and optimization analyses.

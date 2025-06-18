## 📘 Section: Compiler Plugins and Custom Lints  
### 🔹 Category: Compiler Extensions  
#### ✅ Answer 828: Developing compiler extensions (experimental)

A compiler extension modifies or extends the compiler's behavior. In Rust, such extensions are usually developed on nightly, via custom lints, macros, or MIR manipulation. For example, you can add a MIR pass for extra analysis. Experimentally, you can fork the Rust compiler and add a new lint or analysis. These extensions are not officially supported and require advanced Rust knowledge.

## 📘 Section: Compiler Internals and Language Design  
### 🔹 Category: Macro expansion internals  
#### ✅ Answer 966: Understanding macro expansion internals

In Rust, macro expansion is the process of transforming macro invocations in source code into actual code blocks. The compiler finds macro calls and expands them into the corresponding code. For example, `println!("Hello");` is expanded at compile time into the appropriate function call. Macro expansion occurs before or during parsing and is included in the final AST.

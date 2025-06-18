## 📘 Section: Systems-Level Design with Rust  
### 🔹 Category: Rust vs C Safety Comparison  
#### ✅ Answer 550: Comparing safety guarantees of Rust vs C at systems level

Rust provides much stronger memory safety than C due to its ownership model and compiler checks. In C, pointer errors, buffer overflows, and use-after-free bugs are common. Rust prevents these at compile time.

- **Rust Advantages:**
  - Ownership and borrowing prevent memory leaks and data races.
  - The compiler blocks invalid accesses and dangling pointers.
  - Null pointer and use-after-free errors are caught at compile time.
- **Typical C Vulnerabilities:**
  - Buffer overflows, dangling pointers, double free, use-after-free.
  - Memory management is entirely manual.

In summary, Rust is superior to C in terms of safety and robustness for systems programming.

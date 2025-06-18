## 📘 Section: FFI and Foreign Interfacing  
### 🔹 Category: Exporting Rust Libraries  
#### ❓ Question 609: Building a Rust library consumable from C and other languages

To make a Rust library usable from C and other languages:

- Export Rust functions with `#[no_mangle]` and `extern "C"`.
- Use compatible data types and manage memory carefully.
- Write an example Rust library function callable from C.

🔧 **Task:** Write an example of a Rust library function that can be called from C.

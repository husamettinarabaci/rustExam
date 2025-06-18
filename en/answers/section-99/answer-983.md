## 📘 Section: Language Interoperability  
### 🔹 Category: Header Generation and Automation  
#### ✅ Answer 983: Using `cbindgen` for header generation

`cbindgen` automatically generates a C header (.h) file from a Rust library.

In the terminal:
```
cargo install cbindgen
cbindgen --crate <crate_name> --output mylib.h
```

You can use the generated `mylib.h` in C/C++ projects. Your Rust functions should be defined with `extern "C"`.

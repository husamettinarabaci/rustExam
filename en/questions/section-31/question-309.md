## 📘 Section: Enums, Variants, and Algebraic Data Types  
### 🔹 Category: Enum Representation and FFI  
#### ❓ Question 309: Enum representation with `#[repr]` and FFI

Write Rust code that does the following:

- Define an enum and specify its representation using `#[repr(u8)]` or `#[repr(C)]`.
- Make the enum compatible with C FFI (Foreign Function Interface).
- Show how the enum can be passed as a parameter to a C function (the C function can be declared in Rust with `extern "C"`).

🔧 **Task:** Use the `#[repr]` attribute to control the enum's memory layout and make it FFI-compatible. Demonstrate an example FFI function call with the enum.

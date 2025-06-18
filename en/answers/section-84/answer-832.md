## 📘 Section: Cross-Crate API Design and Versioning  
### 🔹 Category: Visibility Management  
#### ✅ Answer 832: Managing visibility with `pub`, `pub(crate)`, and `pub(super)`

In Rust, module and API visibility is managed with:

- `pub`: Public, accessible from outside the crate.
- `pub(crate)`: Accessible only within the same crate.
- `pub(super)`: Accessible only by the parent module.

Restricting visibility narrows the API surface and increases stability. Avoid using `pub` unless necessary; only expose what must be public.

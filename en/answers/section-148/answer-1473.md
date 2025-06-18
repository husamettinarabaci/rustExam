## 📘 Section: Compile-Time Reflection and Introspection
### 🔹 Category: Compile-Time Reflection
#### ✅ Answer 1473: Generating metadata at compile-time

Compile-time metadata generation can be achieved using procedural macros or build scripts. For example, a macro can generate an array of field names and types for a struct.

```rust
// With a procedural macro
#[derive(MetaInfo)]
struct Point { x: i32, y: i32 }

// The macro generates Point::meta_info():
// [ ("x", "i32"), ("y", "i32") ]
```

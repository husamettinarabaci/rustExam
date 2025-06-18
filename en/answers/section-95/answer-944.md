## 📘 Section: Metaprogramming and Reflection
### 🔹 Category: Type Metadata and Trait Reflection
#### ✅ Answer 944: Type metadata and trait reflection patterns

Type metadata is information about types (e.g., names, fields, methods) available at runtime in languages with reflection. Rust does not provide runtime type metadata, but similar patterns can be simulated.

Example: Using traits and enums for type identification:

```rust
trait TypeName {
    fn type_name(&self) -> &'static str;
}

struct User;
struct Product;

impl TypeName for User {
    fn type_name(&self) -> &'static str { "User" }
}
impl TypeName for Product {
    fn type_name(&self) -> &'static str { "Product" }
}

fn print_type<T: TypeName>(item: &T) {
    println!("Type: {}", item.type_name());
}
```

Limitations: No access to fields or methods at runtime. Use cases: serialization, plugin systems, or logging. For more advanced needs, custom registries or code generation may be required.

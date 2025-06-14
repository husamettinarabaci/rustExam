## 📘 Section: Macros  
### 🔹 Category: Declarative vs Procedural  
#### ✅ Answer 108: Declarative vs procedural macros

**Explanation:**
The `impl Trait` syntax is used in function return types or parameters to indicate that the function returns or accepts some type that implements a specific trait, without specifying the concrete type. For example, `fn foo() -> impl Iterator<Item=i32>` returns any type implementing `Iterator<Item=i32>`.

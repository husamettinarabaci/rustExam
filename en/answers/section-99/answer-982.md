## 📘 Section: Language Interoperability  
### 🔹 Category: Embedding Rust Code in C/C++ Projects  
#### ✅ Answer 982: Embedding Rust code in C/C++ projects

To embed Rust code in a C project, build a dynamic or static library from Rust:

Rust side:
```rust
#[no_mangle]
pub extern "C" fn hello() {
    println!("Hello from Rust!");
}
```

In Cargo.toml:
```
[lib]
crate-type = ["cdylib"]
```

C side:
```c
extern void hello();
int main() {
    hello();
}
```

Build the Rust library and link it to your C project.

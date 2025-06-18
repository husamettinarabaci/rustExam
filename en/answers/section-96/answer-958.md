## 📘 Section: Advanced Testing and Formal Verification  
### 🔹 Category: Mutation Testing for Test Quality  
#### ✅ Answer 958: Mutation testing for test quality assessment

Mutation testing introduces intentional bugs (mutations) into code to see if tests catch them. In Rust, tools like "mutagen" can be used.

```bash
# To start mutation testing with mutagen
cargo install mutagen
cargo mutagen test
```
If tests do not catch the mutations, test quality should be improved.

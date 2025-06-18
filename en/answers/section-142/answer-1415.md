## 📘 Section: DSL User Experience and Tooling  
### 🔹 Category: Generating Helpful Error Messages  
#### ✅ Answer 1415: Generating helpful error messages

Helpful error messages clearly state the cause and suggest a fix.

```rust
// Erroneous code: 2 +
if parse_error() {
    show_error("Missing operand: expected a number after '+'. Example: 2 + 3");
}
```
The message is clear, concise, and includes a correction suggestion.

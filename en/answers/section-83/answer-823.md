## 📘 Section: Compiler Plugins and Custom Lints  
### 🔹 Category: Code Style Enforcement  
#### ✅ Answer 823: Automating code style enforcement

For code style enforcement in Rust projects, use Clippy and rustfmt. Clippy statically analyzes your code and provides suggestions. rustfmt automatically formats your code. In CI/CD:

- Use `cargo clippy -- -D warnings` to treat all warnings as errors.
- Use `cargo fmt -- --check` to verify code formatting.
- Add these commands to CI scripts to automatically detect style violations.

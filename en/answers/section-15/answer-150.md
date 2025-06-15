## 📚 Section: Crates and External Packages  
### 🔹 Category: Cargo and Dependencies  
#### ✅ Answer 150: Using build scripts

**Explanation:**

- A `build.rs` file is an optional build script that Cargo runs before compiling your crate. It is used for tasks like code generation, compiling native code, or setting environment variables.
- Example `build.rs` that prints a message:
  ```rust
  fn main() {
      println!("cargo:warning=Custom build script running!");
  }
  ```
- Cargo automatically detects and runs `build.rs` if it exists in the project root. The script can communicate with Cargo using special `println!` directives (e.g., `cargo:rerun-if-changed=...`).
- Build scripts are useful for advanced build customization and automation.

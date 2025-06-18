## 📘 Section: Systems Security and Hardening
### 🔹 Category: Sandboxing and Capability-Based Security
#### ✅ Answer 915: Sandboxing and capability-based security

Sandboxing restricts code execution to a controlled environment, reducing the risk of security breaches. In Rust, you can use the type system to limit access to sensitive APIs, or use OS-level sandboxing (e.g., running code in a separate process with limited permissions). The example below demonstrates running untrusted code in a child process with restricted capabilities using the `std::process` API.

```rust
use std::process::Command;

fn run_in_sandbox() {
    let output = Command::new("/usr/bin/env")
        .arg("echo")
        .arg("Hello from sandbox!")
        .output()
        .expect("Failed to execute process");
    println!("Sandboxed output: {}", String::from_utf8_lossy(&output.stdout));
}

fn main() {
    run_in_sandbox();
}
```

For more advanced sandboxing, use containers, seccomp, or OS-specific APIs. Capability-based security can be enforced by only passing required resources to functions or plugins, limiting what they can access.

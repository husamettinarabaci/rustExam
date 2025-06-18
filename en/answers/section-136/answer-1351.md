## 📘 Section: Plugin Security and Isolation  
### 🔹 Category: Sandboxing for isolation  
#### ✅ Answer 1351: Isolating plugins with OS-level sandboxing

Sandboxing means running plugins in an isolated environment to prevent them from harming the main application or system. In Rust, plugins can be isolated using OS features like `seccomp`, `chroot`, or containers (e.g., Docker).

Example: To run a plugin in a Docker container:

```sh
docker run --rm -v $(pwd)/plugin:/plugin:ro --network=none my-rust-plugin
```
This command isolates the plugin with no network access and a read-only filesystem.

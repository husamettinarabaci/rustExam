## 📘 Section: Plugin Security and Isolation  
### 🔹 Category: Resource usage control  
#### ✅ Answer 1352: Controlling resource usage in plugins

If plugin resource usage is not controlled, it can harm the main application's performance or security. In Rust, resource limits can be enforced using OS-level features like cgroups, ulimit, or container resource limits.

Example: Limit a plugin's CPU and memory with Docker:

```sh
docker run --rm --cpus=1 --memory=256m my-rust-plugin
```
This command restricts the plugin to 1 CPU and 256 MB of memory.

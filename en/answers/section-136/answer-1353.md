## 📘 Section: Plugin Security and Isolation  
### 🔹 Category: Capability-based permissions  
#### ✅ Answer 1353: Capability-based permissions for plugins

Capability-based permissions allow a plugin to access only specific system resources, reducing the risk of harm. In Rust, you can restrict capabilities using Linux tools like `capsh` or Docker's `--cap-drop` and `--cap-add` flags.

Example: Remove all capabilities except NET_BIND_SERVICE with Docker:

```sh
docker run --rm --cap-drop=ALL --cap-add=NET_BIND_SERVICE my-rust-plugin
```
This command allows the plugin to bind to network ports but denies other system capabilities.

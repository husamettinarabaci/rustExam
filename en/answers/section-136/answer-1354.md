## 📘 Section: Plugin Security and Isolation  
### 🔹 Category: Untrusted plugins  
#### ✅ Answer 1354: Running untrusted plugins safely

Untrusted plugins can harm the main application or leak data. In Rust, such plugins should be run in isolated processes, with limited permissions and resource constraints. Containers or separate user accounts can be used.

Example: Run the plugin as a separate user:

```sh
sudo -u nobody ./my-rust-plugin
```
This command minimizes the plugin's privileges on the system.

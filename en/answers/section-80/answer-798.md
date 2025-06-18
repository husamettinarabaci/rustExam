## 📘 Section: Systems Programming Advanced Topics  
### 🔹 Category: Profiling and Debugging System Software  
#### ✅ Answer 798: Profiling and debugging system software

Profiling and debugging tools for Rust system software include `perf`, `gdb`, and `valgrind`. Instrument code with logging or counters for profiling. Example:

```sh
perf record ./my_binary
perf report
# Debug with gdb
gdb ./my_binary
```
Use assertions and logging to catch bugs early.

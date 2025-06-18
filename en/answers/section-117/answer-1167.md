## 📘 Section: Thread Management and Scheduling  
### 🔹 Category: Thread Affinity and CPU Pinning  
#### ✅ Answer 1167: Thread affinity and CPU pinning

Thread affinity is the practice of binding a thread to a specific CPU core. CPU pinning restricts a thread to run only on certain cores. Rust's standard library does not provide direct support for thread affinity, but you can use external crates like `core_affinity` to assign a thread to a specific core. Thread affinity can be useful for cache locality and reducing latency in real-time applications.

## 📘 Section: Systems-Level Design with Rust  
### 🔹 Category: System Calls and FFI  
#### ✅ Answer 542: Creating a syscall wrapper with `libc`

You can use the `libc` crate and FFI to wrap system calls in Rust. Here is a safe wrapper for the `getpid` syscall.

```rust
extern crate libc;

fn get_pid() -> libc::pid_t {
    unsafe { libc::getpid() }
}

fn main() {
    let pid = get_pid();
    println!("Process ID: {}", pid);
}
```

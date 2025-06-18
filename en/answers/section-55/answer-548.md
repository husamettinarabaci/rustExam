## 📘 Section: Systems-Level Design with Rust  
### 🔹 Category: File Descriptors and I/O  
#### ✅ Answer 548: Managing file descriptors and I/O manually

Basic I/O operations with file descriptors can be done in Rust using `libc` or the standard library. Here is an example.

```rust
extern crate libc;
use std::ffi::CString;

fn main() {
    let filename = CString::new("test_fd.txt").unwrap();
    unsafe {
        let fd = libc::open(filename.as_ptr(), libc::O_CREAT | libc::O_WRONLY, 0o644);
        if fd < 0 {
            panic!("open failed");
        }
        let msg = b"Hello, file descriptor!\n";
        libc::write(fd, msg.as_ptr() as *const _, msg.len());
        libc::close(fd);
        let fd = libc::open(filename.as_ptr(), libc::O_RDONLY);
        let mut buf = [0u8; 32];
        let n = libc::read(fd, buf.as_mut_ptr() as *mut _, buf.len());
        println!("Read: {}", std::str::from_utf8(&buf[..n as usize]).unwrap());
        libc::close(fd);
    }
}
```

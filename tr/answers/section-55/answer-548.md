## 📘 Bölüm: Sistem Seviyesinde Tasarım  
### 🔹 Kategori: Dosya Tanıtıcıları ve G/Ç  
#### ✅ Cevap 548: Dosya tanıtıcıları ve G/Ç ile manuel çalışma

Dosya tanıtıcıları ile temel G/Ç işlemleri Rust'ta `libc` veya standart kütüphane ile yapılabilir. Aşağıda bir örnek verilmiştir.

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

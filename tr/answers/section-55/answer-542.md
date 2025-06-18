## 📘 Bölüm: Sistem Seviyesinde Tasarım  
### 🔹 Kategori: Sistem Çağrıları ve FFI  
#### ✅ Cevap 542: `libc` ile syscall sarmalayıcı oluşturma

`libc` crate'i ile FFI kullanarak sistem çağrılarını Rust fonksiyonlarıyla sarmalayabiliriz. Aşağıda, `getpid` çağrısı için güvenli bir sarmalayıcı örneği verilmiştir.

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

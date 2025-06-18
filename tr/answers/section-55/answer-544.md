## 📘 Bölüm: Sistem Seviyesinde Tasarım  
### 🔹 Kategori: Bellek Eşleme ve `mmap`  
#### ✅ Cevap 544: `mmap` ile manuel bellek eşleme

`libc` ile `mmap` fonksiyonu kullanılarak bellek bölgesi ayrılabilir ve yönetilebilir. Aşağıda temel bir örnek verilmiştir.

```rust
extern crate libc;

fn main() {
    let size = 4096;
    unsafe {
        let ptr = libc::mmap(
            std::ptr::null_mut(),
            size,
            libc::PROT_READ | libc::PROT_WRITE,
            libc::MAP_ANONYMOUS | libc::MAP_PRIVATE,
            -1,
            0,
        );
        if ptr == libc::MAP_FAILED {
            panic!("mmap failed");
        }
        let slice = std::slice::from_raw_parts_mut(ptr as *mut u8, size);
        slice[0] = 42;
        println!("Value: {}", slice[0]);
        libc::munmap(ptr, size);
    }
}
```

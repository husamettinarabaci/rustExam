## 📘 Bölüm: Sistem Programlama İleri Konular  
### 🔹 Kategori: Aygıt Sürücüleri ve Kernel Modülleri  
#### ✅ Cevap 791: Rust ile aygıt sürücüsü yazma

Rust ile aygıt sürücüsü yazmak, düşük seviyeli donanım erişimi ve güvenlik gerektirir. Rust'ın sahiplik ve tip sistemi, C'ye göre daha güvenli sürücüler yazmanıza olanak tanır. Genellikle `no_std` ortamında, donanım register'larına erişmek için `unsafe` bloklar kullanılır. Sürücü kodu, donanım adreslerini ve bellek haritalarını doğrudan yönetir.

```rust
#![no_std]
#![no_main]

use core::ptr;

const DEVICE_ADDR: u32 = 0x1000_0000;

#[no_mangle]
pub extern "C" fn driver_entry() {
    unsafe {
        let reg = DEVICE_ADDR as *mut u32;
        ptr::write_volatile(reg, 0x1);
    }
}
```
Bu örnekte, bir aygıt register'ına doğrudan yazma işlemi gösterilmiştir. `unsafe` blok, donanım erişimi için gereklidir.

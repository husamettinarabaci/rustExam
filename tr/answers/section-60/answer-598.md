## 📘 Bölüm: Sistem Programlama Ustalığı  
### 🔹 Kategori: MMIO ile Donanım Arayüzü  
#### ✅ Cevap 598: MMIO ile donanım arayüzü

MMIO ile donanım register erişimi için unsafe bloklar gereklidir. Aşağıda bir register'a erişim simülasyonu yapılmıştır:

```rust
fn main() {
    let reg_addr = 0x1000_0000 as *mut u32;
    unsafe {
        // Register'a yazma
        reg_addr.write_volatile(0xDEADBEEF);
        // Register'dan okuma
        let val = reg_addr.read_volatile();
        println!("Register value: 0x{:X}", val);
    }
}
// Not: Gerçek donanımda çalıştırmak tehlikeli olabilir. Sadece simülasyon veya gömülü ortamda kullanın.
```

## 📘 Bölüm: Sistem Seviyesinde Tasarım  
### 🔹 Kategori: Unsafe Kod ve Pointer'lar  
#### ✅ Cevap 543: Raw pointer'larla `unsafe` kullanımı

Raw pointer'lar ile unsafe blokta doğrudan bellek erişimi yapılabilir. Aşağıda bir değişkenin raw pointer'ı ile okuma ve yazma örneği verilmiştir.

```rust
fn main() {
    let mut x = 42;
    let ptr = &mut x as *mut i32;
    unsafe {
        *ptr = 100;
        println!("x: {}", *ptr);
    }
}
```

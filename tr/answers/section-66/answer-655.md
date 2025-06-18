## 📘 Bölüm: Unsafe Kod Desenleri ve Güvenlik
### 🔹 Kategori: Aliasing kuralları ve tanımsız davranışı anlama
#### ✅ Cevap 655: Aliasing kuralları ve tanımsız davranışı anlama

Aliasing, iki veya daha fazla pointer'ın aynı belleği göstermesidir. Rust'ta değiştirilebilir ve değiştirilemez referanslar alias olamaz. Bu kural ihlal edilirse tanımsız davranış oluşur.

```rust
fn main() {
    let mut x = 5;
    let r1 = &mut x as *mut i32;
    let r2 = &x as *const i32;
    unsafe {
        *r1 = 10; // Değiştir
        println!("{}", *r2); // Değiştirilemez pointer ile oku
    }
}
```

Bu ancak değiştirilebilir ve değiştirilemez erişim çakışmazsa güvenlidir. Rust'ın aliasing kurallarına uyun.

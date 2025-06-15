## 📘 Bölüm: Closure ve Sahiplik  
### 🔹 Kategori: Closure'ın referans ile yakalaması  
#### ✅ Cevap 241: Closure'ın referans ile değişken yakalaması

Bu çözümde, closure'ın değişkenleri referans ile nasıl yakalayabileceği gösterilmektedir. Closure değişkeni ödünç alır, bu nedenle değişkende yapılan değişiklikler closure tekrar çağrıldığında yansır.

```rust
fn main() {
    let mut deger = 10;
    let yazdir = || println!("Değer: {}", deger);

    yazdir(); // 10 yazdırır
    deger = 20;
    yazdir(); // 20 yazdırır
}
```

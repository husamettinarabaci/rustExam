## 📘 Bölüm: Closure ve Sahiplik  
### 🔹 Kategori: Closure'ın değer ile yakalaması (`move`)  
#### ✅ Cevap 242: Closure'ın değer ile (`move`) değişken yakalaması

Bu çözümde, closure'ın değişkenleri `move` anahtar kelimesiyle değer olarak nasıl yakalayabileceği gösterilmektedir. Closure yakaladığı değerin sahibi olur, bu nedenle orijinal değişkende yapılan değişiklikler closure'ı etkilemez.

```rust
fn main() {
    let mut deger = 10;
    let yazdir = move || println!("Değer: {}", deger);

    deger = 20;
    yazdir(); // 10 yazdırır
}
```

## 📘 Bölüm: Modüller II  
### 🔹 Kategori: Herkese Açık Öğeler  
#### ✅ Cevap 131: `pub` ile herkese açık öğeler

Rust'ta `pub` anahtar kelimesi, bir öğeyi modül dışından erişilebilir yapar. Fonksiyonlar, sabitler, yapılar ve daha fazlası için kullanılabilir. İşte bir örnek:

```rust
mod benim_modul {
    pub const DEGER: i32 = 10;
    pub fn selamla() {
        println!("Modülden selamlar!");
    }
}

fn main() {
    println!("DEGER = {}", benim_modul::DEGER);
    benim_modul::selamla();
}
```

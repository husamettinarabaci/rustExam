## 📘 Bölüm: Modüller II  
### 🔹 Kategori: Gizlilik Kuralları  
#### ✅ Cevap 132: Modüllerde gizlilik kuralları

Rust'ta modül içindeki öğeler varsayılan olarak özeldir. `pub` anahtar kelimesiyle dışarıya açılırlar. Özel bir öğeye modül dışından erişmeye çalışmak derleme hatasına yol açar.

```rust
mod benim_modul {
    pub const HERKESE_ACIK: i32 = 1;
    const OZEL: i32 = 2;
    pub fn acik_fonksiyon() {
        println!("acik_fonksiyon");
    }
    fn ozel_fonksiyon() {
        println!("ozel_fonksiyon");
    }
}

fn main() {
    println!("{}", benim_modul::HERKESE_ACIK); // Tamam
    benim_modul::acik_fonksiyon(); // Tamam
    // println!("{}", benim_modul::OZEL); // HATA: özel
    // benim_modul::ozel_fonksiyon(); // HATA: özel
}
```

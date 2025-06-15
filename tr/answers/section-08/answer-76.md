## 📘 Bölüm: Ömürler I  
### 🔹 Kategori: Fonksiyon Dönüşlerinde Ömür  
#### ✅ Cevap 76: Fonksiyon dönüşlerinde ömür

Bir fonksiyon, girişteki veriden türetilen bir referans döndürüyorsa, dönen referansın geçerliliğini sağlamak için ömür parametresi eklenmelidir. Burada fonksiyon, string diliminin ilk kelimesini döndürür.

```rust
fn ilk_kelime<'a>(s: &'a str) -> &'a str {
    match s.find(' ') {
        Some(idx) => &s[..idx],
        None => s,
    }
}

fn main() {
    let metin = String::from("merhaba dünya");
    let kelime = ilk_kelime(&metin);
    println!("İlk kelime: {}", kelime);
}
```

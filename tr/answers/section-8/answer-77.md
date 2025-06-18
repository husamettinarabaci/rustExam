## 📘 Bölüm: Ömürler I  
### 🔹 Kategori: Metot Alıcılarında Ömür  
#### ✅ Cevap 77: Metot alıcılarında ömür

Bir yapıda referans alanı varsa, bu referansı kullanan metotlarda da ömür parametresi belirtilmelidir. Burada `len` metodu, `self`'i doğru ömür ile ödünç alır.

```rust
struct YaziTutucu<'a> {
    yazi: &'a str,
}

impl YaziTutucu<'_> {
    fn uzunluk(&self) -> usize {
        self.yazi.len()
    }
}

fn main() {
    let s = String::from("ömürlü metot");
    let tutucu = YaziTutucu { yazi: &s };
    println!("Uzunluk: {}", tutucu.uzunluk());
}
```

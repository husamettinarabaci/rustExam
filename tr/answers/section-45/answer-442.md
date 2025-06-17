## 📘 Bölüm: Ömürler ve Ödünç Alma Pratiği  
### 🔹 Kategori: Yapı Tanımlarında Ömürler  
#### ✅ Cevap 442: Referans tutan yapılar için ömür anotasyonları

Bir struct içinde referans alan bir alan varsa, ömür parametresi gereklidir. Aşağıda bir string referansı tutan struct örneği ve ömür anotasyonu gösterilmiştir.

```rust
struct Mesaj<'a> {
    icerik: &'a str,
}

fn main() {
    let yazi = String::from("Merhaba!");
    let mesaj = Mesaj { icerik: &yazi };
    println!("{}", mesaj.icerik);
}
```

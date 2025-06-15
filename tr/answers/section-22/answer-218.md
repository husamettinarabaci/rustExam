## 📘 Bölüm: Jenerikler I  
### 🔹 Kategori: Jenerik ömür parametreleri  
#### ✅ Cevap 218: Jenerik ömür parametreleri

Jenerik ömür parametresi kullanmak için fonksiyon ve parametrelerinde ömür belirtin. Burada, `longest` fonksiyonu döndürülen referansı giriş ömrüne bağlar.

```rust
fn longest<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() {
        x
    } else {
        y
    }
}

fn main() {
    let s1 = "merhaba";
    let s2 = "dünya!";
    let sonuc = longest(s1, s2);
    println!("En uzun string: {}", sonuc);
}
```
Bu, döndürülen referansın her iki giriş referansı kadar geçerli olmasını sağlar.

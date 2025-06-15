## 📘 Bölüm: Ömürler I  
### 🔹 Kategori: Fonksiyon İmzasında Temel Ömür Belirtimi  
#### ✅ Cevap 71: Fonksiyon imzasında temel ömür belirtimi

Bir fonksiyondan referans döndürmek için, giriş referansları ile çıkış referansı arasındaki ömür ilişkisini belirtmek gerekir. Bu, derleyiciye referansların ömürlerini nasıl ilişkilendireceğini söyler.

```rust
fn en_uzun<'a>(x: &'a str, y: &'a str) -> &'a str {
    if x.len() > y.len() {
        x
    } else {
        y
    }
}

fn main() {
    let s1 = "merhaba";
    let s2 = "dünya!";
    let sonuc = en_uzun(s1, s2);
    println!("En uzun string: {}", sonuc);
}
```

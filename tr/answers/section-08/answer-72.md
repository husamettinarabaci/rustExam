## 📘 Bölüm: Ömürler I  
### 🔹 Kategori: Çoklu Referanslarla Ömür  
#### ✅ Cevap 72: Çoklu referanslarla ömür

Bir fonksiyon farklı ömürlere sahip referanslar alıyorsa, birden fazla ömür parametresiyle bu ilişkileri belirtmek gerekir. Döndürülen referans, iki ömürden daha kısa olanına bağlı olur.

```rust
fn en_uzun<'a, 'b>(x: &'a str, y: &'b str) -> &str {
    if x.len() > y.len() {
        x
    } else {
        y
    }
}

fn main() {
    let s1 = String::from("merhaba");
    let s2 = String::from("dünya!");
    let sonuc = en_uzun(&s1, &s2);
    println!("En uzun string: {}", sonuc);
}
```

> Not: Pratikte, genellikle çıkış ömrü iki giriş ömründen kısa olanına bağlanır veya her ikisi de aynı ömür olmalıdır. Yukarıdaki örnek, çoklu ömür belirtimi sözdizimini göstermektedir.

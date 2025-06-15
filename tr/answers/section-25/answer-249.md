## 📘 Bölüm: Closure ve Sahiplik
### 🔹 Kategori: Closure ve Hata Yönetimi
#### ✅ Cevap 249: Closure ve hata yönetimi

Rust'ta closure'lar hata yönetimi için `Result` döndürebilir. Ayrıca, `map` ve `and_then` gibi kombinatorlerle de kullanılabilir. İşte bir örnek:

```rust
fn main() {
    let sayi_parse = |s: &str| s.parse::<i32>();

    let sonuc = sayi_parse("42");
    match sonuc {
        Ok(n) => println!("Çözüldü: {}", n),
        Err(e) => println!("Hata: {}", e),
    }

    // Kombinator kullanımı
    let iki_kat = sayi_parse("21").map(|n| n * 2);
    println!("İki katı: {:?}", iki_kat); // Çıktı: İki katı: Ok(42)
}
```

Bu closure, bir string'i tamsayıya çevirmeye çalışır ve `Result<i32, _>` döndürür. Örnekte hem doğrudan hata yönetimi hem de `map` gibi kombinatorlerin kullanımı gösterilmiştir.

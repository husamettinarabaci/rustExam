## 📘 Bölüm: Kapanışlar ve Sahiplik  
### 🔹 Kategori: Kapanış ve Hata Yönetimi  
#### ✅ Cevap 249: Kapanış ve hata yönetimi

Kapanışlar hata yönetimi için `Result` döndürebilir.

```rust
let parse = |s: &str| s.parse::<i32>();
let sonuc = parse("42");
if let Ok(n) = sonuc {
    println!("Çözüldü: {}", n);
}
```

Kapanışlar fonksiyon içinde `?` operatörüyle hata yayabilir.

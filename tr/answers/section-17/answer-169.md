## 📘 Bölüm: İleri Düzey Desenler  
### 🔹 Kategori: `|` ile Birden Fazla Desen  
#### ✅ Cevap 169: `|` ile birden fazla desen kullanma

Rust'ta `|` operatörü ile birden fazla değeri eşleştirebilirsiniz. Örnek:

```rust
fn karakter_tanimla(c: char) {
    match c {
        'a' | 'e' | 'i' | 'o' | 'u' => println!("Sesli harf"),
        '0'..='9' => println!("Rakam"),
        _ => println!("Diğer"),
    }
}
```

Bu fonksiyon, `|` ve aralıklar ile birden fazla deseni eşleştirmeyi gösterir.

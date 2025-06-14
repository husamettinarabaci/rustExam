## 📘 Bölüm: İleri Düzey Desenler  
### 🔹 Kategori: Aralıklar ve Bağlamalar  
#### ✅ Cevap 163: Aralıklar ve bağlamalar üzerinde eşleme

Rust'ta aralık desenleri ve değişken bağlamaları ile farklı değer aralıklarını `match` kollarında yönetebilirsiniz. Örnek:

```rust
fn aralik_tanimla(n: i32) {
    match n {
        1..=10 => println!("Düşük"),
        11..=100 => println!("Orta"),
        x if x > 100 => println!("Yüksek"),
        _ => println!("Sıfır veya negatif"),
    }
}
```

Bu fonksiyon, aralıklar ve 100'den büyük değerler için değişken bağlaması kullanır.

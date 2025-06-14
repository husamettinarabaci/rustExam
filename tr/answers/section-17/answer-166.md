## 📘 Bölüm: İleri Düzey Desenler  
### 🔹 Kategori: Desenlerde `@` Bağlamaları  
#### ✅ Cevap 166: Desenlerde `@` bağlamalarını kullanma

Rust'ta desenlerde hem bir değeri test etmek hem de onu bir değişkene atamak için `@` bağlamaları kullanılabilir. Örnek:

```rust
fn yas_tanimla(yas: i32) {
    match yas {
        ergen @ 13..=19 => println!("Ergen: {}", ergen),
        cocuk @ 0..=12 => println!("Çocuk: {}", cocuk),
        yetiskin @ 20..=i32::MAX => println!("Yetişkin: {}", yetiskin),
        negatif => println!("Negatif yaş: {}", negatif),
    }
}
```

Bu fonksiyon, her kolda eşleşen değeri değişkene atamak için `@` bağlamalarını kullanır.

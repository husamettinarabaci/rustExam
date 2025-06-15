## 📘 Bölüm: İleri Düzey Desenler  
### 🔹 Kategori: Referanslar ve dereference işlemleriyle desen eşleme  
#### ✅ Cevap 170: Referanslar ve dereference işlemleriyle desen eşleme

Rust'ta referanslar üzerinde desen eşleme yaparken `&val` gibi desenlerle referansı çözerek değere ulaşabilirsiniz. Ayrıca referans değişkeniyle doğrudan da eşleme yapılabilir. Bu, ödünç alınan verilerle çalışırken oldukça kullanışlıdır.

```rust
let x = 42;
let r = &x;

match r {
    &val => println!("Dereference ile eşleşti: {}", val),
}

match r {
    val_ref => println!("Referans olarak eşleşti: {}", val_ref),
}
```

- İlk match'te `&val` deseni referansı çözer ve değeri `val`'e bağlar.
- İkinci match'te `val_ref` referans olarak kalır, değere ulaşmak için `*val_ref` kullanılabilir.

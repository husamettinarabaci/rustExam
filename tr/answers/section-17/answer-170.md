## 📘 Bölüm: İleri Düzey Desenler  
### 🔹 Kategori: Referanslar ve Dereference ile Eşleme  
#### ✅ Cevap 170: Referanslar ve dereference işlemleriyle desen eşleme

Rust'ta referanslar ve dereference işlemleriyle desen eşleme yapılabilir. Örnek:

```rust
fn referans_tanimla(n: &i32) {
    match n {
        &0 => println!("Sıfır"),
        &x if x > 0 => println!("Pozitif"),
        &x if x < 0 => println!("Negatif"),
    }
}
```

Bu fonksiyon, referans üzerinde desen eşleme ve dereference işlemini göstermektedir.

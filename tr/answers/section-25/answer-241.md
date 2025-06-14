## 📘 Bölüm: Kapanışlar ve Sahiplik  
### 🔹 Kategori: Kapanışta Referansla Yakalama  
#### ✅ Cevap 241: Kapanışta referansla yakalama

Kapanış, ortamdan değişkenleri referansla yakalayabilir. Kapanış değeri okuyabilir, ancak değişken mutably değilse değiştiremez.

```rust
let x = 5;
let yazdir_x = || println!("x = {}", x);
yazdir_x();
```

Kapanış hala kullanılıyorsa, x'i değiştirmeye çalışırsanız borrow checker hatası alabilirsiniz.

## 📘 Bölüm: Modüller II  
### 🔹 Kategori: `as` ile İçe Aktarma  
#### ✅ Cevap 137: `as` ile içe aktarma

Rust'ta `as` anahtar kelimesiyle içe aktarılan bir öğeye yeni bir isim verebilirsiniz. Bu, isim çakışmalarını önlemek veya kodunuzu daha okunur yapmak için kullanışlıdır. Örnek:

```rust
mod selamlar {
    pub fn merhaba() {
        println!("selamlar::merhaba fonksiyonundan merhaba!");
    }
}

use selamlar::merhaba as selamla;

fn main() {
    selamla(); // Yeni adıyla fonksiyonu çağırır
    // merhaba(); // Hata: bu kapsamda bulunamadı
}
```

- `merhaba` fonksiyonu `selamla` adıyla içe aktarılmıştır.
- `main` fonksiyonunda sadece yeni isim (`selamla`) kullanılabilir.
- Orijinal isim (`merhaba`) kullanılırsa derleme hatası alınır çünkü sadece yeniden adlandırılmış hali kapsamda olur.

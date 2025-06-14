## 📘 Bölüm: Kapanışlar ve Sahiplik  
### 🔹 Kategori: Kapanışta Değerle Yakalama  
#### ✅ Cevap 242: `move` ile değerle yakalama

Kapanış, `move` anahtar kelimesiyle değişkenleri değerle yakalar. Bu, değişkenin kapanışa taşınmasını veya kopyalanmasını sağlar.

```rust
let s = String::from("merhaba");
let yazdir_s = move || println!("{}", s);
yazdir_s();
// s artık kullanılamaz
```

`move` anahtar kelimesi, kapanışın değişkenlerin sahipliğini almasını sağlar.

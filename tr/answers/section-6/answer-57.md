## 📘 Bölüm: Fonksiyonlar II  
### 🔹 Kategori: Trait Sınırı Parametreli Fonksiyonlar  
#### ✅ Cevap 57: Trait sınırı parametreli fonksiyon

Trait sınırları, fonksiyonların yalnızca belirli bir trait'i uygulayan türleri kabul etmesini sağlar. Burada fonksiyon, `Display` trait'ini uygulayan herhangi bir değeri ekrana yazdırır.

```rust
use std::fmt::Display;

fn goster<T: Display>(deger: T) {
    println!("Değer: {}", deger);
}

fn main() {
    goster(123);           // tamsayı
    goster("Rustacean"); // string dilimi
}
```

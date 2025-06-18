## 📘 Bölüm: Fonksiyonlar II  
### 🔹 Kategori: Jenerik Parametreli Fonksiyonlar  
#### ✅ Cevap 56: Jenerik parametreli fonksiyon

Rust'ta jenerik fonksiyonlar köşeli parantez ve trait sınırı ile tanımlanır. Burada fonksiyon, `Debug` trait'ini uygulayan herhangi bir değeri ekrana yazdırır.

```rust
use std::fmt::Debug;

fn debug_yaz<T: Debug>(deger: T) {
    println!("Değer: {:?}", deger);
}

fn main() {
    debug_yaz(42);           // tamsayı
    debug_yaz("merhaba");   // string dilimi
}
```

## 📘 Bölüm: Closure ve Sahiplik  
### 🔹 Kategori: Closure'da yakalanan değişkenleri değiştirme  
#### ✅ Cevap 243: Closure'da yakalanan değişkenleri değiştirme

Bu çözümde, closure'ın yakaladığı değişkeni nasıl değiştirebileceği gösterilmektedir. Closure `mut` olarak tanımlanmalı ve değişkeni değiştirilebilir olarak ödünç alır.

```rust
fn main() {
    let mut deger = 0;
    let mut artir = || {
        deger += 1;
        println!("Closure içindeki değer: {}", deger);
    };

    artir(); // 1 yazdırır
    artir(); // 2 yazdırır
    println!("Closure çağrılarından sonra değer: {}", deger); // 2 yazdırır
}
```

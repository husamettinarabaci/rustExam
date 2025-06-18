## 📘 Bölüm: Fonksiyonlar II  
### 🔹 Kategori: Fonksiyonda Erken Dönüş  
#### ✅ Cevap 59: Erken dönüşlü fonksiyon

Bu fonksiyon, `return` anahtar kelimesiyle erken çıkışın nasıl yapılacağını gösterir. Girdi negatifse fonksiyon hemen döner, aksi halde değeri yazdırır.

```rust
fn pozitifse_yazdir(n: i32) {
    if n < 0 {
        println!("Negatif değer, erken dönülüyor.");
        return;
    }
    println!("Değer: {}", n);
}

fn main() {
    pozitifse_yazdir(5);   // çıktı: Değer: 5
    pozitifse_yazdir(-3);  // çıktı: Negatif değer, erken dönülüyor.
}
```

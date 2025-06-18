## 📘 Bölüm: Fonksiyonlar I  
### 🔹 Kategori: Fonksiyon Parametreleri  
#### ✅ Cevap 42: Parametreli ve dönüş değerli fonksiyon

**Açıklama:**

Fonksiyonlar parametre alabilir ve `->` ile dönüş türü belirtebilir.

```rust
topla(a: i32, b: i32) -> i32 {
    a + b
}

fn main() {
    let sonuc = topla(3, 4);
    println!("Sonuç: {}", sonuc);
}
```

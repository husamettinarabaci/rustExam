## 📗 Bölüm: Fonksiyonlar I  
### 🔹 Kategori: Fonksiyon Parametreleri  
#### ✅ Cevap 46: Çoklu parametreli fonksiyon

**Açıklama:**
Rust'ta fonksiyonlar birden fazla parametre alabilir ve her birinin tipi belirtilir.

**Örnek:**
```rust
fn multiply(a: i32, b: i32) -> i32 {
    a * b
}

fn main() {
    let sonuc = multiply(3, 4);
    println!("{}", sonuc);
}
```
Burada `multiply` fonksiyonu iki parametre alır ve çarpımlarını döndürür.

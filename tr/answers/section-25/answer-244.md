## 📘 Bölüm: Closure ve Sahiplik  
### 🔹 Kategori: Fonksiyonlardan closure döndürme  
#### ✅ Cevap 244: Fonksiyondan closure döndürme

Bu çözümde, fonksiyondan closure döndürmenin nasıl yapılacağı gösterilmektedir. Fonksiyon, yakaladığı değeri argümanına ekleyen bir closure döndürür ve dinamik dispatch için `Box<dyn Fn(i32) -> i32>` kullanılır.

```rust
fn toplama_yapici(x: i32) -> Box<dyn Fn(i32) -> i32> {
    Box::new(move |y| x + y)
}

fn main() {
    let bes_ekle = toplama_yapici(5);
    let on_ekle = toplama_yapici(10);
    println!("5 + 3 = {}", bes_ekle(3)); // 8
    println!("10 + 7 = {}", on_ekle(7)); // 17
}
```

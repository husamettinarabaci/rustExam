## 📘 Bölüm: Metaprogramlama ve Yansıma
### 🔹 Kategori: Any Trait ile Çalışma Zamanı Tip İncelemesi
#### ✅ Cevap 949: `Any` trait ile çalışma zamanında tip inceleme

Rust'ta `Any` trait, sınırlı çalışma zamanı tip incelemesi ve downcasting sağlar. Tüm `'static` tipler için uygulanır ve bir değerin tipini kontrol etmeye veya downcast yapmaya olanak tanır.

Örnek:

```rust
use std::any::Any;

fn tipi_yazdir(val: &dyn Any) {
    if val.is::<i32>() {
        println!("Bu bir i32!");
    } else if val.is::<String>() {
        println!("Bu bir String!");
    }
}

fn main() {
    let x = 42;
    let y = "merhaba".to_string();
    tipi_yazdir(&x);
    tipi_yazdir(&y);
}
```

Sınırlar: Sadece `'static` tiplerde çalışır, alanlara/metotlara erişim yoktur ve tam yansıma yerine geçmez. Kullanım alanları: heterojen koleksiyonlar, eklenti sistemleri, dinamik dispatch.

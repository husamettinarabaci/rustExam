## 📘 Bölüm: Derleme Zamanı Yansıma ve İçgörü
### 🔹 Kategori: Derleme Zamanı Yansıma
#### ✅ Cevap 1473: Derleme zamanında meta veri üretimi

Derleme zamanı meta veri üretimi için procedural macro veya build script kullanılabilir. Örneğin, bir struct'ın alan adlarını ve tiplerini bir diziye yazdıran bir makro oluşturulabilir.

```rust
// Procedural macro ile
#[derive(MetaInfo)]
struct Point { x: i32, y: i32 }

// Makro, Point::meta_info() fonksiyonunu üretir:
// [ ("x", "i32"), ("y", "i32") ]
```

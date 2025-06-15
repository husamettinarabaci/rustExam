# 📘 Bölüm: Fonksiyonlar I  
## 🔹 Kategori: Fonksiyon Dönüş Tipleri  
### ✅ Cevap 49: Demet döndüren fonksiyon

Rust'ta bir fonksiyon, dönüş tipi olarak demet (tuple) belirterek birden fazla değer döndürebilir.

```rust
fn get_point() -> (i32, i32) {
    (3, 4)
}

fn main() {
    let point = get_point();
    println!("Nokta: ({}, {})", point.0, point.1);
}
```

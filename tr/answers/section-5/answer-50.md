# Answer 50

## 📘 Bölüm: Fonksiyonlar I  
### 🔹 Kategori: Fonksiyon Parametreleri  
#### ✅ Cevap 50: Demeti parametre olarak alan fonksiyon

Rust'ta bir fonksiyon, imza kısmında demet (tuple) tipi belirterek parametre olarak demet alabilir.

```rust
fn print_point(point: (i32, i32)) {
    println!("Nokta: ({}, {})", point.0, point.1);
}

fn main() {
    print_point((5, 8));
}
```

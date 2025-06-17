## 📘 Bölüm: Enumlar ve Veri Modelleme  
### 🔹 Kategori: Enumlar üzerinde desen eşleme  
#### ✅ Cevap 422: Enumlar üzerinde desen eşleme

Enumlar üzerinde desen eşleme, farklı varyantlara göre farklı işlemler yapmayı sağlar. `match` ifadesi ile enumun hangi varyantta olduğunu kontrol edebilirsiniz.

```rust
enum Shape {
    Circle(f64),
    Rectangle(f64, f64),
}

fn area(shape: Shape) -> f64 {
    match shape {
        Shape::Circle(r) => 3.14 * r * r,
        Shape::Rectangle(w, h) => w * h,
    }
}
```

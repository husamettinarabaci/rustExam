## 📘 Bölüm: İleri Düzey Desen Eşleme
### 🔹 Kategori: Tuple ve struct'ları parçalama
#### ✅ Cevap 382: Tuple ve struct'ları parçalama

Bu soruda, bir tuple ve bir struct tanımlanır ve match ifadesiyle alanlarına ayrılır. Bu, Rust'ta desen eşleme ile veri yapılarını kolayca parçalamayı gösterir.

```rust
struct Point { x: i32, y: i32 }

fn main() {
    let tup = (10, 20);
    let p = Point { x: 5, y: 15 };

    match tup {
        (a, b) => println!("Tuple values: a = {}, b = {}", a, b),
    }

    match p {
        Point { x, y } => println!("Point values: x = {}, y = {}", x, y),
    }
}
```

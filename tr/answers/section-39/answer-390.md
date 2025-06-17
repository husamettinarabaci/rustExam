## 📘 Bölüm: İleri Düzey Desen Eşleme
### 🔹 Kategori: Fonksiyon parametrelerinde desen eşleme
#### ✅ Cevap 390: Fonksiyon parametrelerinde desen eşleme

Bu soruda, fonksiyon parametrelerinde desen eşleme kullanılarak değerler doğrudan alınır ve işlenir.

```rust
fn print_coords((x, y): (i32, i32)) {
    println!("x = {}, y = {}", x, y);
}

fn main() {
    let point = (3, 7);
    print_coords(point);
}
```

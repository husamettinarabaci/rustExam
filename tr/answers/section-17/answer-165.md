## 📘 Bölüm: İleri Düzey Desenler  
### 🔹 Kategori: Desenlerde `ref` ve `ref mut` kullanımı  
#### ✅ Cevap 165: Desenlerde `ref` ve `ref mut` kullanımı

Bu örnekte, desen eşlemede `ref` ve `ref mut` kullanılarak alanların değiştirilemez ve değiştirilebilir olarak nasıl ödünç alınacağı gösterilmektedir. `ref` değiştirilemez referans, `ref mut` ise değiştirilebilir referans oluşturur ve değeri değiştirmenizi sağlar.

```rust
fn main() {
    let mut tuple = (1, 2);
    match tuple {
        (ref x, ref mut y) => {
            println!("x: {}", x);
            *y += 10;
            println!("y değiştikten sonra: {}", y);
        }
    }
}
```

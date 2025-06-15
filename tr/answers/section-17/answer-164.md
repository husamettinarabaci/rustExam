## 📘 Bölüm: İleri Düzey Desenler  
### 🔹 Kategori: Desenlerde `_` ile değerleri yoksayma  
#### ✅ Cevap 164: Desenlerde `_` ile değerleri yoksayma

Bu örnekte, Rust'ta desen eşlemede kullanmadığınız değerleri yoksaymak için `_` karakterinin nasıl kullanılacağı gösterilmektedir. `_`, `match` kollarında veya parçalama sırasında ilgilenilmeyen değerleri atlamak için kullanılabilir.

```rust
fn main() {
    let tuple = (1, 2, 3);
    match tuple {
        (x, _, z) => println!("Birinci: {}, Üçüncü: {}", x, z),
    }
}
```

## 📘 Bölüm: İleri Düzey Desenler  
### 🔹 Kategori: Değerleri Yoksayma  
#### ✅ Cevap 164: Desenlerde `_` ile değerleri yoksayma

Rust'ta desenlerde ilgilenilmeyen değerleri yoksaymak için `_` kullanılabilir. Örnek:

```rust
fn tuple_yazdir(t: (i32, i32, i32)) {
    match t {
        (0, _, _) => println!("İlki sıfır"),
        (ilk, _, ucuncu) => println!("İlk: {}, Üçüncü: {}", ilk, ucuncu),
    }
}
```

Bu fonksiyon, tuple'ın ikinci değerini yoksayar ve desenlerde `_` kullanımını gösterir.

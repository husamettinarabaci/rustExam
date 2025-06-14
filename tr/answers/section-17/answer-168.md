## 📘 Bölüm: İleri Düzey Desenler  
### 🔹 Kategori: Fonksiyon Parametrelerinde Tuple Parçalama  
#### ✅ Cevap 168: Fonksiyon parametrelerinde tuple parçalara ayırma

Rust'ta tuple'ı doğrudan fonksiyon parametrelerinde parçalara ayırabilirsiniz. Örnek:

```rust
fn tuple_yazdir((a, b, c): (i32, i32, i32)) {
    println!("Toplam: {}", a + b + c);
    println!("a: {}", a);
    println!("b: {}", b);
    println!("c: {}", c);
}
```

Bu fonksiyon, tuple'ı parametre listesinde parçalara ayırır ve toplamı ile her değeri ayrı ayrı yazdırır.

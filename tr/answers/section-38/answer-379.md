## 📘 Bölüm: Fonksiyon Sınırlarında Sahiplik  
### 🔹 Kategori: Dilimlerin ve referansların sahipliğini anlama  
#### ✅ Cevap 379: Dilimlerin ve referansların sahipliğini anlama

Dilimler (slice) ve referanslar, verinin sahipliğini taşımaz; yalnızca veriye geçici erişim sağlar. Bir vektörden oluşturulan dilim, fonksiyona referans olarak aktarıldığında vektörün sahipliği aktarılmaz ve vektör fonksiyon çağrısından sonra da kullanılabilir.

```rust
fn print_slice(slice: &[i32]) {
    println!("Slice: {:?}", slice);
}

fn main() {
    let numbers = vec![1, 2, 3, 4, 5];
    let slice = &numbers[1..4];
    print_slice(slice);
    println!("Original vector: {:?}", numbers); // Vektör hala kullanılabilir
}
```

Burada, `print_slice` fonksiyonu yalnızca dilime referans alır, sahipliği almaz. Bu nedenle, `numbers` vektörü fonksiyon çağrısından sonra da geçerlidir.

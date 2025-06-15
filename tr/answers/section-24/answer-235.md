## 📘 Bölüm: Closure ve İteratör Temelleri  
### 🔹 Kategori: İteratör Metotlarını Zincirleme  
#### ✅ Cevap 235: Rust'ta iteratör metotlarını zincirleme

Bu örnekte Rust'ta birden fazla iteratör metodunun nasıl zincirlenebileceği gösterilmektedir. Program, bir vektördeki her sayıyı ikiyle çarpar, 5'ten büyük olanları filtreler ve sonuçları yeni bir vektöre toplar.

```rust
fn main() {
    let sayilar = vec![1, 2, 3, 4, 5];
    let islenmis: Vec<i32> = sayilar
        .iter()
        .map(|x| x * 2)
        .filter(|x| *x > 5)
        .collect();
    println!("İşlenmiş: {:?}", islenmis);
}
```

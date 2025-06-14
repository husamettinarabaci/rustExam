## 📘 Bölüm: Eşzamanlılık ve Çoklu İş Parçacığı  
### 🔹 Kategori: Paralel İteratörler  
#### ✅ Cevap 189: Rayon ile paralel iteratör kullanımı

`rayon` crate'i ile koleksiyonlar üzerinde paralel hesaplama yapmak kolaydır.

```rust
use rayon::prelude::*;

fn main() {
    let v: Vec<i32> = (1..1_000_001).collect();
    let toplam: i32 = v.par_iter().sum();
    println!("Toplam: {}", toplam);
}
```

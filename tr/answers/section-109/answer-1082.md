## 📘 Bölüm: Paralellik ve Veri Paralel API'ler  
### 🔹 Kategori: Paralel iteratörler ve birleştiriciler  
#### ✅ Cevap 1082: Paralel iteratörler ve birleştiriciler

Rayon ile `par_iter()` kullanarak vektör üzerinde paralel filtreleme ve toplama işlemi yapılabilir. Bu örnekte, 10'dan büyük elemanlar filtrelenip toplamı alınır.

```rust
use rayon::prelude::*;

fn main() {
    let v = vec![5, 12, 8, 20, 15];
    let sum: i32 = v.par_iter().filter(|&&x| x > 10).sum();
    println!("Toplam: {}", sum);
}
```

## 📘 Bölüm: Paralellik ve Veri Paralel API'ler  
### 🔹 Kategori: Paralel koleksiyon işleme  
#### ✅ Cevap 1086: Paralel koleksiyon işleme

Büyük koleksiyonlarda paralel işlem performans avantajı sağlar. Rayon ile vektörün tüm elemanlarının karesi paralel olarak hesaplanır.

```rust
use rayon::prelude::*;

fn main() {
    let v: Vec<u32> = (0..1_000_000).collect();
    let squares: Vec<u32> = v.par_iter().map(|x| x * x).collect();
    println!("İlk 5 kare: {:?}", &squares[..5]);
}
```

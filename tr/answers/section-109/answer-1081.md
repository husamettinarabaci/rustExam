## 📘 Bölüm: Paralellik ve Veri Paralel API'ler  
### 🔹 Kategori: Rayon ile veri paralelliği kullanımı  
#### ✅ Cevap 1081: Rayon ile veri paralelliği kullanımı

Rayon crate'i, koleksiyonlar üzerinde kolayca veri paralelliği sağlar. `par_iter()` ile vektör elemanlarını paralel olarak işleyebiliriz. Bu örnekte, tüm elemanlar ikiyle çarpılır ve sonuçlar ekrana yazdırılır.

```rust
use rayon::prelude::*;

fn main() {
    let v = vec![1, 2, 3, 4, 5];
    let result: Vec<_> = v.par_iter().map(|x| x * 2).collect();
    println!("Sonuç: {:?}", result);
}
```

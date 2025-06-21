## 📘 Bölüm: Akıllı İşaretçiler ve İçsel Değiştirilebilirlik  
### 🔹 Kategori: Akıllı İşaretçi Performansı Karşılaştırması  
#### ✅ Cevap 279: Box, Rc ve Arc performansını karşılaştırma

Bu soruda, `Box`, `Rc` ve `Arc` akıllı işaretçileriyle sarmalanmış büyük bir vektör üzerinde okuma işlemlerinin hızını karşılaştırıyoruz. `Box` tek sahiplik sunarken, `Rc` tek iş parçacığında referans sayımı sağlar, `Arc` ise çoklu iş parçacığında güvenli referans sayımı sunar. Performans farkı, referans sayımı ve eşzamanlılık maliyetlerinden kaynaklanır.

```rust
use std::rc::Rc;
use std::sync::Arc;
use std::time::Instant;

fn main() {
    let data: Vec<i64> = (0..100_000).collect();

    let boxed = Box::new(data.clone());
    let rc = Rc::new(data.clone());
    let arc = Arc::new(data.clone());

    let now = Instant::now();
    let sum: i64 = boxed.iter().sum();
    println!("Box sum: {}, elapsed: {:?}", sum, now.elapsed());

    let now = Instant::now();
    let sum: i64 = rc.iter().sum();
    println!("Rc sum: {}, elapsed: {:?}", sum, now.elapsed());

    let now = Instant::now();
    let sum: i64 = arc.iter().sum();
    println!("Arc sum: {}, elapsed: {:?}", sum, now.elapsed());
}
```

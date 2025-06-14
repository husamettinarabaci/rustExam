## 📚 Bölüm: Koleksiyonlar  
### 🔹 Kategori: BinaryHeap  
#### ✅ Cevap 68: BinaryHeap kullanmak

**Açıklama:**
`BinaryHeap` bir öncelik kuyruğudur. Varsayılan olarak en büyük değer önce çıkar.

```rust
use std::collections::BinaryHeap;

fn main() {
    let mut heap = BinaryHeap::new();
    heap.push(4);
    heap.push(1);
    heap.push(7);
    while let Some(x) = heap.pop() {
        println!("{}", x);
    }
}
```

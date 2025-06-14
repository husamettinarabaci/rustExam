## 📚 Bölüm: Koleksiyonlar  
### 🔹 Kategori: VecDeque  
#### ✅ Cevap 67: VecDeque kullanmak

**Açıklama:**
`VecDeque` çift uçlu kuyruktur. Her iki uçtan ekleme ve çıkarma yapılabilir.

```rust
use std::collections::VecDeque;

fn main() {
    let mut d = VecDeque::new();
    d.push_back(1);
    d.push_front(2);
    println!("{:?}", d);
    d.pop_back();
    println!("{:?}", d);
}
```

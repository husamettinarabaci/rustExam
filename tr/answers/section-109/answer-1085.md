## 📘 Bölüm: Paralellik ve Veri Paralel API'ler  
### 🔹 Kategori: Scoped thread'ler için crossbeam kullanımı  
#### ✅ Cevap 1085: Scoped thread'ler için crossbeam kullanımı

Crossbeam ile scoped thread'ler başlatılabilir ve her thread bir vektörün farklı bölümünü işleyebilir. Sonuçlar ana thread'de birleştirilir.

```rust
use crossbeam::thread;

fn main() {
    let data = vec![1, 2, 3, 4, 5, 6];
    let mut results = vec![0; 2];
    thread::scope(|s| {
        let (left, right) = data.split_at(3);
        let r0 = &mut results[0];
        let r1 = &mut results[1];
        s.spawn(move |_| *r0 = left.iter().sum());
        s.spawn(move |_| *r1 = right.iter().sum());
    }).unwrap();
    println!("Sonuçlar: {:?}", results);
}
```

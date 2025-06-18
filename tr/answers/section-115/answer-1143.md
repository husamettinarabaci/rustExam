## 📘 Bölüm: Eşzamanlı Kodda Test ve Hata Ayıklama  
### 🔹 Kategori: Stres Testi  
#### ✅ Cevap 1143: Eşzamanlı veri yapılarında stres testi

Çok sayıda thread ile bir vektöre veri eklenerek stres testi yapılabilir. `Arc<Mutex<Vec<_>>>` ile veri bütünlüğü korunur. Test sonunda vektörün beklenen uzunluğu doğrulanır.

```rust
use std::sync::{Arc, Mutex};
use std::thread;

let data = Arc::new(Mutex::new(Vec::new()));
let mut handles = vec![];
for i in 0..100 {
    let data = Arc::clone(&data);
    handles.push(thread::spawn(move || {
        data.lock().unwrap().push(i);
    }));
}
for handle in handles {
    handle.join().unwrap();
}
assert_eq!(data.lock().unwrap().len(), 100);
```

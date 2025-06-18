## 📘 Bölüm: Paylaşımlı Durum ve Senkronizasyon
### 🔹 Kategori: OnceCell ve Lazy ile Tek Seferlik Başlatma
#### ✅ Cevap 1024: OnceCell ile tek seferlik başlatma

`OnceCell` ve `Lazy`, bir değerin yalnızca bir kez başlatılmasını ve sonrasında tüm iş parçacıkları tarafından paylaşılmasını sağlar. Bu, örneğin yapılandırma veya global veri için kullanışlıdır.

```rust
use std::sync::Arc;
use std::thread;
use once_cell::sync::OnceCell;

fn main() {
    let cell = Arc::new(OnceCell::new());
    let mut handles = vec![];

    for i in 0..5 {
        let cell = Arc::clone(&cell);
        handles.push(thread::spawn(move || {
            cell.set(i).ok();
            println!("Değer: {}", cell.get().unwrap());
        }));
    }

    for handle in handles {
        handle.join().unwrap();
    }
}
```

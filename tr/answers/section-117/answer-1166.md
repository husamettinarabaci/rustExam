## 📘 Bölüm: Thread Yönetimi ve Zamanlama  
### 🔹 Kategori: Thread Paniklerini Güvenli Yönetme  
#### ✅ Cevap 1166: Thread paniklerini güvenli yönetme

Bu örnekte, bazı thread'ler panik yapar. Ana thread, her bir işçi thread'in panik yapıp yapmadığını `join` sonucu ile kontrol eder ve panik yapanlar için özel bir mesaj yazdırır.

```rust
use std::thread;

fn main() {
    let mut handles = vec![];
    for i in 0..4 {
        handles.push(thread::spawn(move || {
            if i % 2 == 0 {
                panic!("Thread {} panik yaptı!", i);
            } else {
                println!("Thread {} başarıyla tamamlandı.", i);
            }
        }));
    }
    for (i, handle) in handles.into_iter().enumerate() {
        match handle.join() {
            Ok(_) => println!("Thread {} başarıyla bitti.", i),
            Err(_) => println!("Thread {} panik yaptı ve yakalandı!", i),
        }
    }
}
```

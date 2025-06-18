## 📘 Bölüm: Senkronizasyon Primitifleri Derinlemesine
### 🔹 Kategori: Senkronizasyon doğruluğunu test etme
#### ✅ Cevap 1139: Senkronizasyon doğruluğunu test etme

Bir senkronizasyon primitifinin doğruluğu, birim testlerle kontrol edilir. Testte, veri yarışının oluşmadığı doğrulanır.

```rust
#[cfg(test)]
mod tests {
    use super::*;
    use std::sync::{Arc, Mutex};
    use std::thread;

    #[test]
    fn test_mutex() {
        let data = Arc::new(Mutex::new(0));
        let mut handles = vec![];
        for _ in 0..10 {
            let data = Arc::clone(&data);
            handles.push(thread::spawn(move || {
                let mut num = data.lock().unwrap();
                *num += 1;
            }));
        }
        for h in handles { h.join().unwrap(); }
        assert_eq!(*data.lock().unwrap(), 10);
    }
}
```
Bu test, mutex'in doğru çalıştığını gösterir.

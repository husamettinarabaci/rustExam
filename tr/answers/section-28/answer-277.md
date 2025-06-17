## 📘 Bölüm: Akıllı İşaretçiler ve İçsel Değiştirilebilirlik  
### 🔹 Kategori: Ref ve RefMut ile Çalışma Zamanı Borç Hatalarını Ayıklama  
#### ✅ Cevap 277: Çalışma zamanında `Ref` ve `RefMut` ile borç ihlallerini ayıklama

`RefCell<T>` ile aynı anda birden fazla mutable veya immutable borrow denemesi çalışma zamanında borç ihlali hatası ile sonuçlanır. Bu hataları önlemek ve ayıklamak için `try_borrow` ve `try_borrow_mut` yöntemleri kullanılabilir. Aşağıdaki örnekte, önce bir mutable borrow alınır, ardından immutable borrow denemesi yapılır ve hata mesajı kullanıcıya yazdırılır.

```rust
use std::cell::RefCell;

fn main() {
    let cell = RefCell::new(100);

    let mut_ref = cell.borrow_mut();
    // Aynı anda immutable borrow denemesi borç ihlali oluşturur
    match cell.try_borrow() {
        Ok(_) => println!("Immutable borrow başarılı!"),
        Err(e) => println!("Borç ihlali: {}", e),
    }
    drop(mut_ref); // Mutable borrow'u bırak

    // Şimdi immutable borrow alınabilir
    let immut_ref = cell.try_borrow();
    assert!(immut_ref.is_ok());
}
```

Bu yöntemle, borçlanma ihlalleri çalışma zamanında güvenli şekilde ayıklanabilir ve kullanıcıya uygun hata mesajı gösterilebilir.

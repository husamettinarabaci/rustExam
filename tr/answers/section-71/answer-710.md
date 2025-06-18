## 📘 Bölüm: İleri Sahiplik: Grafikler, Döngüler ve İçsel Değiştirilebilirlik  
### 🔹 Kategori: Borrow denetleyici sınırlarını ve çalışma zamanı denetimini anlama  
#### ✅ Cevap 710: Borrow denetleyici sınırlarını ve çalışma zamanı denetimini anlama

Bu örnekte, `RefCell` ile aynı anda birden fazla değiştirilebilir referans alınmaya çalışıldığında çalışma zamanında panik oluşur. Rust'ın borrow checker'ı derleme zamanında bunu engelleyemez, ancak `RefCell` çalışma zamanında kontrol sağlar. Hatanın önlenmesi için `try_borrow_mut` kullanılabilir.

```rust
use std::cell::RefCell;

fn main() {
    let data = RefCell::new(5);
    let mut_ref1 = data.borrow_mut();
    // let mut_ref2 = data.borrow_mut(); // Bu satır panik oluşturur
    drop(mut_ref1); // İlk borç bırakılmadan ikinci alınamaz
    let mut_ref2 = data.borrow_mut(); // Artık güvenli

    // Panik örneği:
    let _a = data.borrow_mut();
    // let _b = data.borrow_mut(); // Panik: already borrowed: BorrowMutError

    // Güvenli kontrol:
    if let Ok(_b) = data.try_borrow_mut() {
        // Güvenli şekilde borç alındı
    } else {
        println!("Zaten değiştirilebilir olarak borç alınmış!");
    }
}
```

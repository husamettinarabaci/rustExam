## 📘 Bölüm: Eklenti Mimarileri  
### 🔹 Kategori: Dinamik Yükleme ve Eklenti Sistemleri  
#### ✅ Cevap 1252: Çalışma zamanında eklentiler için `libloading` kullanımı

`libloading` crate'i ile çalışma zamanında eklenti yüklemek için aşağıdaki gibi bir kod yazılır. Bu kod, paylaşımlı kütüphanedeki bir fonksiyonu bulur ve çağırır.

```rust
use libloading::{Library, Symbol};

fn main() {
    let lib = Library::new("./plugin.so").unwrap();
    unsafe {
        let func: Symbol<unsafe extern fn() -> i32> = lib.get(b"plugin_entry").unwrap();
        println!("Sonuç: {}", func());
    }
}
```

Bu örnekte, `plugin.so` dosyasındaki `plugin_entry` fonksiyonu çağrılır ve sonucu terminale yazdırılır.

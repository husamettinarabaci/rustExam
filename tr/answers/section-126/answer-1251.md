## 📘 Bölüm: Eklenti Mimarileri  
### 🔹 Kategori: Dinamik Yükleme ve Eklenti Sistemleri  
#### ✅ Cevap 1251: Dinamik yüklemeyle eklenti sistemleri tasarlama

Rust'ta dinamik yüklemeyle eklenti sistemi tasarlamak için ana uygulama ve eklentiler ayrı derlenir. Eklentiler paylaşımlı kütüphane (ör. `.so`) olarak derlenir ve `libloading` gibi bir crate ile çalışma zamanında yüklenir. Eklenti arayüzü genellikle C ABI ile tanımlanır.

```rust
// Ana uygulama tarafı (libloading ile)
use libloading::{Library, Symbol};

fn main() {
    let lib = Library::new("./plugin.so").unwrap();
    unsafe {
        let func: Symbol<unsafe extern fn() -> i32> = lib.get(b"plugin_entry").unwrap();
        println!("Plugin result: {}", func());
    }
}
```

Eklenti tarafı:
```rust
#[no_mangle]
pub extern "C" fn plugin_entry() -> i32 {
    42
}
```

Bu yapı, eklentilerin bağımsız derlenip çalışma zamanında yüklenmesini sağlar.

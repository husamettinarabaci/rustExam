## 📘 Bölüm: Eklenti Mimarileri  
### 🔹 Kategori: Dinamik Yükleme ve Eklenti Sistemleri  
#### ✅ Cevap 1255: Eklenti keşfi ve kayıt mekanizmaları

Eklenti keşfi için ana uygulama belirli bir dizindeki (`plugins/` gibi) tüm paylaşımlı kütüphane dosyalarını tarayabilir. Her eklenti yüklenip bir kayıt listesine eklenir. Alternatif olarak, bir yapılandırma dosyası ile eklenti yolları tanımlanabilir.

Örnek keşif kodu:
```rust
use std::fs;
use libloading::Library;

let paths = fs::read_dir("./plugins").unwrap();
for entry in paths {
    let path = entry.unwrap().path();
    if path.extension().and_then(|s| s.to_str()) == Some("so") {
        let lib = Library::new(path).unwrap();
        // Eklenti kaydı burada yapılır
    }
}
```

Yapılandırma dosyası ile eklenti yolları esnek şekilde yönetilebilir. Bu yöntemler, eklentilerin otomatik keşfi ve kaydı için pratiktir.

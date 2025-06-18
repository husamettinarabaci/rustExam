## 📘 Bölüm: Eklenti Mimarileri  
### 🔹 Kategori: Dinamik Yükleme ve Eklenti Sistemleri  
#### ✅ Cevap 1257: Eklenti sandboxing ve güvenlik hususları

Rust'ta eklentileri izole etmek için ayrı işlem (process) başlatmak veya WebAssembly (WASM) tabanlı sandbox kullanmak mümkündür. Sandboxing, eklentinin ana uygulamaya zarar vermesini önler ancak performans ve iletişim kısıtları getirir. Ek güvenlik için eklenti API'si sınırlandırılmalı, dosya/işletim sistemi erişimi kontrol edilmeli ve eklenti imzaları doğrulanmalıdır.

Örnek sandbox başlatma:
```rust
use std::process::Command;

let output = Command::new("plugin_bin").output().unwrap();
```

WASM tabanlı sandbox ile eklenti güvenli şekilde çalıştırılabilir. Güvenli eklenti sistemi için minimum yetki ve denetim mekanizmaları önerilir.

## 📘 Bölüm: Eklenti Güvenliği ve İzolasyonu  
### 🔹 Kategori: Eklentilerde kod enjeksiyon saldırılarını önleme  
#### ✅ Cevap 1358: Eklentilerde kod enjeksiyon saldırılarını önleme

Kod enjeksiyonunu önlemek için, eklenti yüklemeden önce imza doğrulaması yapılmalı ve yalnızca güvenilir kaynaklardan gelen eklentilere izin verilmelidir. Ayrıca, eklenti API'si sınırlandırılmalı ve eklentiler ayrı bir işlemde çalıştırılabilir. Rust'ta, eklenti işlemini başlatmak için `std::process::Command` kullanılabilir.

```rust
use std::process::Command;

fn run_plugin_safely(plugin_path: &str) {
    let output = Command::new(plugin_path)
        .arg("--safe-mode")
        .output();
    match output {
        Ok(result) => println!("Eklenti çıktı: {:?}", result),
        Err(e) => println!("Eklenti başlatılamadı: {}", e),
    }
}
```
Bu yöntemle, eklenti ana uygulamadan izole bir şekilde çalıştırılır ve API sınırlandırmaları uygulanabilir. Ayrıca, tür güvenliği ve sınır kontrolleri ile eklenti arayüzü güvenli tutulmalıdır.

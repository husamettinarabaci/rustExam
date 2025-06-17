## 📘 Bölüm: Proje Tasarımı ve Refaktörizasyon  
### 🔹 Kategori: Temiz Mimari ve Genişlemeye Hazırlık  
#### ✅ Cevap 500: Temiz mimari ilkeleriyle genişlemeye hazırlık

Temiz mimari, katmanlı yapı ve soyutlamalar ile kodun genişletilebilirliğini artırır. Bağımlılıklar arayüzlerle yönetilir ve yeni özellikler kolayca eklenebilir.

```rust
trait Storage {
    fn save(&self, data: &str);
}

struct FileStorage;

impl Storage for FileStorage {
    fn save(&self, data: &str) {
        println!("Saving to file: {}", data);
    }
}

struct App<T: Storage> {
    storage: T,
}

impl<T: Storage> App<T> {
    fn run(&self) {
        self.storage.save("Hello, world!");
    }
}

fn main() {
    let app = App { storage: FileStorage };
    app.run();
}
```

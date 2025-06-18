## 📘 Bölüm: Eklenti Sistemi Testi ve Bakımı  
### 🔹 Kategori: Eklenti Bağımlılıklarını Sahte/Mock Nesnelerle Test Etme  
#### ✅ Cevap 1403: Eklenti bağımlılıklarını sahte/mock nesnelerle test etme

Gerçek bağımlılıklar yerine mock nesneler kullanmak, eklenti kodunun izole şekilde test edilmesini sağlar. Bu yaklaşımda, bağımlılıklar bir trait ile soyutlanır ve testte sahte bir implementasyon kullanılır.

```rust
trait Logger {
    fn log(&self, msg: &str);
}

struct Plugin<'a> {
    logger: &'a dyn Logger,
}

impl<'a> Plugin<'a> {
    fn do_work(&self) {
        self.logger.log("Çalışıyor");
    }
}

struct MockLogger {
    pub called: std::cell::Cell<bool>,
}

impl Logger for MockLogger {
    fn log(&self, _msg: &str) {
        self.called.set(true);
    }
}

#[test]
fn test_plugin_with_mock_logger() {
    let mock = MockLogger { called: std::cell::Cell::new(false) };
    let plugin = Plugin { logger: &mock };
    plugin.do_work();
    assert!(mock.called.get());
}
```

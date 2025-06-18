## 📘 Bölüm: Test ve Hata Ayıklama
### 🔹 Kategori: Testlerde Bağımlılıkları Taklit Etme
#### ✅ Cevap 843: Testlerde bağımlılıkları taklit etme ve enjeksiyon

Rust'ta birim testlerinde dış bağımlılıkları taklit etmek için trait tabanlı soyutlama ve mock nesneler kullanılır. Bu sayede gerçek veri tabanı veya dosya sistemi yerine sahte nesnelerle test yapılabilir.

```rust
trait DataSource {
    fn get_data(&self) -> i32;
}

struct RealSource;
impl DataSource for RealSource {
    fn get_data(&self) -> i32 { 42 }
}

struct MockSource;
impl DataSource for MockSource {
    fn get_data(&self) -> i32 { 7 }
}

fn process(source: &dyn DataSource) -> i32 {
    source.get_data() * 2
}

#[test]
fn test_process_with_mock() {
    let mock = MockSource;
    assert_eq!(process(&mock), 14);
}
```

Bu örnekte, gerçek bağımlılık yerine mock nesne ile test yapılmıştır.

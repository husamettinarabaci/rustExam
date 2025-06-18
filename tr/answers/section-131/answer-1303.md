## 📘 Bölüm: Eklenti Sistemleri İleri Konular  
### 🔹 Kategori: Eklenti Durumunu İzole Etme  
#### ✅ Cevap 1303: Güvenlik için eklenti durumunu izole etme

Eklenti sistemlerinde durum izolasyonu, bir eklentinin diğerlerini veya ana uygulamayı etkilemesini önler. Rust'ta her eklentiye ayrı bir yapı ve veri alanı vererek izolasyon sağlanabilir.

```rust
trait Plugin {
    fn run(&mut self);
}

struct CounterPlugin {
    count: u32,
}

impl Plugin for CounterPlugin {
    fn run(&mut self) {
        self.count += 1;
        println!("Counter: {}", self.count);
    }
}

fn main() {
    let mut plugin1 = CounterPlugin { count: 0 };
    let mut plugin2 = CounterPlugin { count: 100 };
    plugin1.run();
    plugin2.run();
}
```

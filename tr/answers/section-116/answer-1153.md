## 📘 Bölüm: Pratikte Async Desenler
### 🔹 Kategori: Karmaşık async iş akışlarını birleştirme
#### ✅ Cevap 1153: Karmaşık async iş akışlarını birleştirme

Birden fazla async fonksiyonu `.await`, `join!` veya benzeri ile birleştirerek karmaşık iş akışları oluşturabilirsiniz. Böylece görevleri sıralı veya eşzamanlı çalıştırabilirsiniz.

```rust
use tokio::join;

async fn gorev1() -> u32 { 1 }
async fn gorev2() -> u32 { 2 }

#[tokio::main]
async fn main() {
    let (a, b) = join!(gorev1(), gorev2());
    println!("Sonuçlar: {}, {}", a, b);
}
```

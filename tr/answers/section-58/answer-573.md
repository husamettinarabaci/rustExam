## 📘 Bölüm: Oyun Motoru Mimarisi
### 🔹 Kategori: Kaynak Yönetimi ve Canlı Güncelleme
#### ✅ Cevap 573: Kaynak yükleme ve canlı güncelleme

Oyun motorlarında kaynak yükleme, dosyaların (görseller, sesler, modeller) belleğe alınmasını sağlar. Canlı güncelleme (hot-reload), bir kaynağın değiştirilmesiyle oyunun yeniden başlatılmadan güncellenmesini mümkün kılar. Rust'ta dosya izleme için `notify` gibi crate'ler kullanılabilir.

```rust
use notify::{Watcher, RecursiveMode, watcher};
use std::sync::mpsc::channel;

let (tx, rx) = channel();
let mut watcher = watcher(tx, std::time::Duration::from_secs(2)).unwrap();
watcher.watch("assets/", RecursiveMode::Recursive).unwrap();
// Dosya değişikliklerini dinleyerek kaynakları yeniden yükleyebilirsiniz.
```

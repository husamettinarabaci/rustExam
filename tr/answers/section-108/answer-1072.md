## 📘 Bölüm: Tokio Ekosistemi Derinlemesine  
### 🔹 Kategori: Tokio görev zamanlayıcısını etkin kullanma  
#### ✅ Cevap 1072: Tokio görev zamanlayıcısını etkin kullanma

Tokio'nun görev zamanlayıcısı, görevleri adil ve verimli şekilde yürütmek için iş-stealing (iş çalma) ve round-robin gibi teknikler kullanır. Görevler worker thread'ler arasında dinamik olarak dağıtılır.

Etkin kullanım için ipuçları:
- Uzun süren bloklayıcı işlemleri `spawn_blocking` ile ayırın.
- Küçük ve kısa ömürlü görevler oluşturun.
- Fazla sayıda küçük görev yerine, mantıksal olarak gruplanmış görevler tercih edin.

Örnek:
```rust
use tokio::task;

#[tokio::main]
async fn main() {
    let h1 = task::spawn(async { /* kısa görev */ });
    let h2 = task::spawn(async { /* başka bir görev */ });
    h1.await.unwrap();
    h2.await.unwrap();
}
```
Bu yapı, görevlerin zamanlayıcı tarafından adil şekilde yürütülmesini sağlar.

## 📘 Bölüm: Pinning ve Kendine Referanslı Tipler
### 🔹 Kategori: `Pin<Box<T>>` ile Taşıma Sonrası Hareketi Önlemek
#### ❓ Soru 743: Taşıma sonrası hareketi önlemek için `Pin<Box<T>>` kullanımı

Bir struct'ın başlatıldıktan sonra taşınmasını önlemek için `Pin<Box<T>>` kullanımını gösteren bir Rust örneği yazın.

- Başlatıldıktan sonra taşınmaması gereken bir struct tanımlayın.
- `Pin<Box<T>>` ile struct'ı ayırıp pinleyin.
- Pinlenmiş struct'ın taşınmasının engellendiğini gösterin.

🔧 **Görev:** `Pin<Box<T>>` ile bir değerin pinlendikten sonra bellekte taşınmayacağını garanti altına alın.

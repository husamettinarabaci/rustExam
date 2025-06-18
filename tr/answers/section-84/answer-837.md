## 📘 Bölüm: Crate Dışı API Tasarımı ve Sürümleme  
### 🔹 Kategori: Workspace'te Birden Fazla Crate'i Koordine Etme  
#### ✅ Cevap 837: Workspace'te birden fazla crate'i koordine etme

Bir workspace'te birden fazla crate yönetmek için `Cargo.toml`'da `[workspace]` bölümü tanımlanır. Ortak bağımlılıklar üst düzeyde yönetilebilir. Avantajları:

- Kod paylaşımı ve sürüm uyumluluğu kolaylaşır.
- Derleme ve test süreçleri merkezi hale gelir.
- Dikkat: Bağımlılık sürümlerinin uyumlu tutulması gerekir, aksi halde derleme sorunları yaşanabilir.

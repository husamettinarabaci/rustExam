## 📘 Bölüm: Pinning ve Kendine Referanslı Tipler
### 🔹 Kategori: Pin Tiplerini Kabul Eden Güvenli API'ler Yazma
#### ❓ Soru 745: Pin tiplerini kabul eden güvenli API'ler yazma

Pinlenmiş tipleri (`Pin<&mut T>` veya `Pin<Box<T>>`) kabul eden güvenli bir API'nin nasıl yazılacağını gösteren bir Rust örneği yazın.

- Pin gerektiren bir struct tanımlayın.
- `Pin<&mut Self>` alan bir metot implement edin.
- Bu metodu dışarıdan güvenli şekilde nasıl kullanacağınızı gösterin.

🔧 **Görev:** Pinlendikten sonra taşınmaması gereken tipler için güvenli API tasarımını ve kullanımını gösterin.

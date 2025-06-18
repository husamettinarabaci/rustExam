## 📘 Bölüm: Eklenti Güvenliği ve İzolasyonu  
### 🔹 Kategori: Yetenek tabanlı izinler  
#### ✅ Cevap 1353: Eklentiler için yetenek tabanlı izinler

Yetenek tabanlı izinler, bir eklentinin yalnızca belirli sistem kaynaklarına erişebilmesini sağlar. Bu, eklentinin zarar verme riskini azaltır. Rust uygulamalarında, Linux'ta `capsh` veya Docker'ın `--cap-drop` ve `--cap-add` parametreleriyle yetenekler sınırlandırılabilir.

Örnek: Docker ile tüm yetenekleri kaldırıp sadece NET_BIND_SERVICE eklemek:

```sh
docker run --rm --cap-drop=ALL --cap-add=NET_BIND_SERVICE my-rust-plugin
```
Bu komut, eklentinin sadece port dinlemesine izin verir, diğer sistem yetenekleri engellenir.

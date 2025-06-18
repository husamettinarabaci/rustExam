## 📘 Bölüm: Eklenti Güvenliği ve İzolasyonu  
### 🔹 Kategori: Güvenilmeyen eklentiler  
#### ✅ Cevap 1354: Güvenilmeyen eklentileri güvenli çalıştırma

Güvenilmeyen eklentiler, ana uygulamaya zarar verebilir veya veri sızdırabilir. Rust uygulamalarında bu tür eklentiler izole bir süreçte, sınırlı izinlerle ve kaynak kısıtlamalarıyla çalıştırılmalıdır. Konteynerler veya ayrı kullanıcı hesapları kullanılabilir.

Örnek: Eklentiyi ayrı bir kullanıcı ile başlatmak:

```sh
sudo -u nobody ./my-rust-plugin
```
Bu komut, eklentinin sistemdeki yetkilerini minimuma indirir.

## 📘 Bölüm: Eklenti Güvenliği ve İzolasyonu  
### 🔹 Kategori: Kaynak kullanımı kontrolü  
#### ✅ Cevap 1352: Eklentilerde kaynak kullanımını kontrol etme

Eklentilerde kaynak kullanımı kontrol edilmezse, ana uygulamanın performansı veya güvenliği tehlikeye girebilir. Rust uygulamalarında kaynak sınırlamaları için işletim sistemi seviyesinde cgroups, ulimit veya konteyner kaynak limitleri kullanılabilir.

Örnek: Docker ile bir eklentiye CPU ve bellek limiti koymak:

```sh
docker run --rm --cpus=1 --memory=256m my-rust-plugin
```
Bu komut, eklentinin en fazla 1 CPU ve 256 MB bellek kullanmasını sağlar.

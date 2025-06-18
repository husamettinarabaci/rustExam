## 📘 Bölüm: Eklenti Güvenliği ve İzolasyonu  
### 🔹 Kategori: Sandboxing ile izolasyon  
#### ✅ Cevap 1351: Eklentileri işletim sistemi düzeyinde sandbox ile izole etme

Sandboxing, eklentilerin ana uygulamaya veya sisteme zarar vermesini önlemek için izole bir ortamda çalıştırılmasıdır. Rust uygulamalarında eklentiler, örneğin Linux'ta `seccomp`, `chroot` veya konteynerler (Docker) ile izole edilebilir.

Örnek: Bir eklentiyi Docker konteynerinde çalıştırmak için:

```sh
docker run --rm -v $(pwd)/plugin:/plugin:ro --network=none my-rust-plugin
```
Bu komut, eklentiyi ağ erişimi olmadan ve salt-okunur dosya sistemiyle izole eder.

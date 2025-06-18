## 📘 Bölüm: Tokio Ekosistemi Derinlemesine  
### 🔹 Kategori: Tokio runtime iç yapısını anlama  
#### ✅ Cevap 1071: Tokio runtime iç yapısını anlama

Tokio runtime, async Rust uygulamalarında görevlerin (task) yürütülmesini sağlayan bir altyapıdır. Temel bileşenleri şunlardır:

- **Görev zamanlayıcı (scheduler):** Görevlerin adil ve verimli şekilde sıraya alınmasını ve yürütülmesini sağlar.
- **Worker thread'ler:** Görevleri paralel olarak çalıştıran iş parçacıklarıdır.
- **Event loop:** I/O olaylarını ve zamanlayıcıları yönetir.

Tokio, iş yükünü worker thread'ler arasında dağıtarak görevleri planlar ve event loop ile I/O işlemlerini beklerken thread'leri boşa harcamaz. Bu sayede yüksek verimlilik ve ölçeklenebilirlik sağlar.

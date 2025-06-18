## 📘 Bölüm: İleri Eşzamanlılık ve Senkronizasyon
### 🔹 Kategori: Kilitsiz Veri Yapıları
#### ❓ Soru 755: Okuma için optimize edilmiş `RwLock` kullanımı

Rust'ta `RwLock` kullanarak okuma ve yazma işlemlerini optimize eden bir örnek yazın:

- Birden fazla thread'in aynı anda veriyi okuyabildiği, ancak yalnızca bir thread'in yazabildiği bir senaryo oluşturun.
- `RwLock`'un okuma ve yazma kilitlerinin nasıl çalıştığını gösterin.
- Okuma ağırlıklı iş yüklerinde `RwLock`'un avantajlarını açıklayın.

🔧 **Görev:** Çok iş parçacıklı bir ortamda `RwLock` ile okuma ve yazma işlemlerini yöneten bir örnek uygulayın ve avantajlarını açıklayın.

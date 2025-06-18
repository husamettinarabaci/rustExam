## 📘 Bölüm: İleri Eşzamanlılık ve Senkronizasyon  
### 🔹 Kategori: Kilitsiz Veri Yapıları ve Atomikler  
#### ❓ Soru 751: Kilitsiz veri yapıları implementasyonu

Aşağıdakileri yapan bir Rust programı yazın:

- Kilitsiz (lock-free) bir sayaç veri yapısı oluşturun.
- Sayaç üzerinde artırım (increment) ve değer okuma işlemlerini sağlayan fonksiyonlar ekleyin.
- `std::sync::atomic` modülünü kullanarak çoklu iş parçacığında güvenli çalışmasını sağlayın.
- Birden fazla iş parçacığı ile sayaç üzerinde eşzamanlı artırım işlemi gerçekleştirin ve sonucu doğrulayın.

🔧 **Görev:** Atomik tiplerle kilitsiz sayaç implementasyonu ve çoklu iş parçacığında doğru çalıştığını gösteren bir örnek yazın.

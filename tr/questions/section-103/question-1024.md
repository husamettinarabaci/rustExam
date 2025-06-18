## 📘 Bölüm: Paylaşımlı Durum ve Senkronizasyon
### 🔹 Kategori: OnceCell ve Lazy ile Tek Seferlik Başlatma
#### ❓ Soru 1024: OnceCell ile tek seferlik başlatma

Bir değerin yalnızca bir kez başlatılmasını ve sonrasında tüm iş parçacıkları tarafından paylaşılmasını sağlayan bir Rust programı yazın. `OnceCell` veya `Lazy` kullanın.

- Bir `Arc<OnceCell<T>>` veya `Lazy` ile korunan bir değer oluşturun.
- Birden fazla iş parçacığı başlatın ve değeri başlatmaya çalışsın.
- Değerin yalnızca bir kez başlatıldığını ve tüm iş parçacıklarının aynı değeri gördüğünü gösterin.

🔧 **Görev:** Tek seferlik başlatma için `OnceCell` veya `Lazy` kullanın.

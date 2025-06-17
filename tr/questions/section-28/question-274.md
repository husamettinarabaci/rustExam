## 📘 Bölüm: Akıllı İşaretçiler ve İçsel Değiştirilebilirlik  
### 🔹 Kategori: Arc<Mutex<T>> ile Paylaşılan Değiştirilebilir Durum  
#### ❓ Soru 274: İş parçacıkları arasında paylaşılan değiştirilebilir durum için `Arc<Mutex<T>>` kullanımı

Aşağıdaki adımları izleyerek bir Rust programı yazın:

- Birden fazla iş parçacığının erişebileceği bir veri yapısı tanımlayın.
- Paylaşılan veriyi sarmalamak için `Arc<Mutex<T>>` kullanın.
- Birden fazla iş parçacığı başlatın ve her biri paylaşılan veriyi güncellesin.
- Sonuçta paylaşılan verinin doğru şekilde güncellendiğini gösterin.

🔧 **Görev:** İş parçacıkları arasında güvenli ve eşzamanlı veri paylaşımı için `Arc<Mutex<T>>` kombinasyonunu kullanan bir örnek oluşturun.

## 📘 Bölüm: Paylaşımlı Durum ve Senkronizasyon
### 🔹 Kategori: Arc ve RwLock ile Paylaşımlı HashMap
#### ❓ Soru 1027: Arc<RwLock<HashMap<K, V>>> ile paylaşımlı HashMap

Birden fazla iş parçacığının aynı HashMap üzerinde güvenli şekilde okuma ve yazma işlemleri yapabildiği bir Rust programı yazın.

- Bir `Arc<RwLock<HashMap<String, i32>>>` oluşturun.
- 3 iş parçacığı HashMap'e anahtar-değer eklesin, 2 iş parçacığı ise okuma yapsın.
- Tüm iş parçacıklarının bitmesini bekleyin ve HashMap'in son halini yazdırın.

🔧 **Görev:** Paylaşımlı bir HashMap üzerinde iş parçacıkları arasında güvenli okuma ve yazma işlemleri yapın.

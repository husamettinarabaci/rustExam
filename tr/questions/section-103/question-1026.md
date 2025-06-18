## 📘 Bölüm: Paylaşımlı Durum ve Senkronizasyon
### 🔹 Kategori: Arc ve Mutex ile Paylaşımlı Vektör
#### ❓ Soru 1026: Arc<Mutex<Vec<T>>> ile paylaşımlı vektör

Birden fazla iş parçacığının aynı vektöre güvenli şekilde eleman ekleyebildiği bir Rust programı yazın.

- Bir `Arc<Mutex<Vec<i32>>>` oluşturun.
- 5 iş parçacığı başlatın ve her biri vektöre bir sayı eklesin.
- Tüm iş parçacıklarının bitmesini bekleyin ve vektörün son halini yazdırın.

🔧 **Görev:** Paylaşımlı bir vektöre iş parçacıkları arasında güvenli şekilde eleman ekleyin.

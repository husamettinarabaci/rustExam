## 📘 Bölüm: İleri Oyun Geliştirme  
### 🔹 Kategori: Çok iş parçacıklı varlık güncelleme sistemleri  
#### ❓ Soru 772: Çok iş parçacıklı varlık güncelleme sistemleri

Aşağıdakileri yapan bir Rust kodu yazın:

- Bir oyun motorunda çok iş parçacıklı (multithreaded) varlık (entity) güncelleme sisteminin temelini oluşturun.
- Varlıkların bir vektörünü oluşturun ve her varlığın durumunu güncelleyen bir fonksiyon tanımlayın.
- Varlık güncellemelerini birden fazla iş parçacığına bölerek paralel olarak gerçekleştirin (örneğin, `std::thread` veya `rayon` kullanabilirsiniz).
- Her iş parçacığı kendi varlık alt kümesini güncellesin.

🔧 **Görev:** Rust'ta çok iş parçacıklı bir varlık güncelleme sistemi kurarak, paralel güncellemenin temel mantığını gösterin.

## 📘 Bölüm: Paylaşımlı Durum ve Senkronizasyon
### 🔹 Kategori: Arc ve Mutex ile Sayaç Artırma
#### ❓ Soru 1030: Arc<Mutex<T>> ile iş parçacığı güvenli sayaç artırma

Birden fazla iş parçacığının aynı sayacı güvenli şekilde artırdığı bir Rust programı yazın.

- Bir `Arc<Mutex<i32>>` oluşturun.
- 10 iş parçacığı başlatın ve her biri sayacı 1 arttırsın.
- Tüm iş parçacıklarının bitmesini bekleyin ve son sayaç değerini yazdırın.

🔧 **Görev:** İş parçacığı güvenli sayaç artırmak için `Arc<Mutex<T>>` kullanın.

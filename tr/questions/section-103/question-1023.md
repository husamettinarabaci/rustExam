## 📘 Bölüm: Paylaşımlı Durum ve Senkronizasyon
### 🔹 Kategori: Atomik Tipler ile Sayaç
#### ❓ Soru 1023: AtomicUsize ile iş parçacığı güvenli sayaç

Birden fazla iş parçacığının aynı anda güvenli şekilde artırabildiği bir sayaç oluşturmak için `AtomicUsize` kullanarak bir Rust programı yazın.

- Bir `Arc<AtomicUsize>` ile korunan bir sayaç oluşturun.
- 10 iş parçacığı başlatın ve her biri sayacı 1 arttırsın.
- Tüm iş parçacıklarının bitmesini bekleyin ve son sayaç değerini yazdırın.

🔧 **Görev:** İş parçacığı güvenli bir sayaç için `AtomicUsize` kullanın.

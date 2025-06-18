## 📘 Bölüm: Paylaşımlı Durum ve Senkronizasyon
### 🔹 Kategori: RwLock ile Okuma ve Yazma
#### ❓ Soru 1022: RwLock ile eşzamanlı okuma ve yazma

Birden fazla iş parçacığının aynı veriyi eşzamanlı okuyabildiği, ancak yalnızca bir iş parçacığının yazabildiği bir senaryoyu `RwLock` kullanarak gösteren bir Rust programı yazın.

- Bir `Arc<RwLock<T>>` ile korunan bir tamsayı oluşturun.
- 5 iş parçacığı veriyi okusun, 2 iş parçacığı ise veriyi değiştirsin.
- Tüm iş parçacıklarının bitmesini bekleyin ve son değeri yazdırın.

🔧 **Görev:** Okuma ve yazma işlemlerini eşzamanlı yönetmek için `RwLock` kullanın.

## 📘 Bölüm: Derinlemesine Async Rust  
### 🔹 Kategori: Paylaşılan Durum ve Arc<Mutex<T>>  
#### ❓ Soru 508: Görevler arasında paylaşılan değiştirilebilir durumu Arc<Mutex<T>> ile paylaşma

Aşağıdakileri yapan bir Rust programı yazın:

- Bir `Arc<Mutex<i32>>` oluşturun.
- Birden fazla async görev, bu değeri güncellesin.
- Ana görev, son değeri terminale yazdırsın.

🔧 **Görev:** Arc ve Mutex ile paylaşılan bir değeri async görevlerle güncelleyin ve sonucu yazdırın.

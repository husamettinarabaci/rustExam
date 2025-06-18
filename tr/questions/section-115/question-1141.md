## 📘 Bölüm: Eşzamanlı Kodda Test ve Hata Ayıklama  
### 🔹 Kategori: Eşzamanlı Senaryolar için Testler  
#### ❓ Soru 1141: Eşzamanlı senaryolar için test yazma

Aşağıdakileri yapan bir Rust birim testi yazın:

- Birden fazla thread'in aynı anda bir sayacı artırdığı bir senaryo oluşturun.
- Sonucun beklenen değere ulaştığını doğrulamak için bir test fonksiyonu yazın.

🔧 **Görev:** `std::thread` ve `Arc<Mutex<T>>` kullanarak eşzamanlı bir sayaç testi yazın.

## 📘 Bölüm: Thread Yönetimi ve Zamanlama  
### 🔹 Kategori: Thread Affinity ve CPU Pinleme  
#### ✅ Cevap 1167: Thread affinity ve CPU pinleme

Thread affinity, bir thread'in belirli bir CPU çekirdeğinde çalışmasını sağlama işlemidir. CPU pinleme ise thread'in sadece belirli çekirdek(ler)de çalışacak şekilde sınırlandırılmasıdır. Rust'ın standart kütüphanesi doğrudan thread affinity sağlamaz, ancak `core_affinity` gibi harici crate'ler ile bir thread'i belirli bir çekirdeğe atayabilirsiniz. Thread affinity, önbellek tutarlılığı ve gerçek zamanlı uygulamalarda gecikmeyi azaltmak için faydalı olabilir.

## 📘 Bölüm: Mikroservis Gözlemlenebilirliği
### 🔹 Kategori: Log ve İz Korelasyonu
#### ✅ Cevap 1384: Servisler arası log ve izleri ilişkilendirme

Log ve iz korelasyonu, bir isteğin sistemdeki yolculuğunu hem loglar hem de izlerle takip etmeyi sağlar. Rust'ta `tracing` ve `tracing-opentelemetry` ile her log kaydına trace ID eklenebilir. Bu sayede bir isteğin geçtiği tüm servislerdeki loglar ve izler birleştirilebilir. Bu korelasyon, hata ayıklamayı ve kök neden analizini büyük ölçüde kolaylaştırır.

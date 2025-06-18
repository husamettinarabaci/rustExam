## 📘 Bölüm: Mikroservis Mimari Desenleri  
### 🔹 Kategori: Otomatik ölçeklendirme  
#### ✅ Cevap 1348: Rust mikroservislerinde otomatik ölçeklendirme

Otomatik ölçeklendirme, yük arttıkça yeni pod'lar başlatarak veya azaldıkça pod sayısını düşürerek kaynak kullanımını optimize eder. Kubernetes'te Rust mikroservisleri için Horizontal Pod Autoscaler (HPA) kullanılır.

Aşağıda örnek bir HPA YAML dosyası verilmiştir:

```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: rust-microservice-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: rust-microservice
  minReplicas: 2
  maxReplicas: 10
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 70
```
Bu yapılandırma, CPU kullanımı %70'i geçtiğinde yeni pod'lar başlatır.

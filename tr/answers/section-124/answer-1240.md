## 📘 Bölüm: Mikroservisler ve Servis Mesh'leri
### 🔹 Kategori: OpenTelemetry ile Dağıtık Loglama ve İzleme
#### ✅ Cevap 1240: Rust servislerini ölçeklendirme ve otomatik ölçeklendirme

Kubernetes'te Rust mikroservislerini ölçeklendirmek için pod replikalarını artırabilir ve metriklere dayalı otomatik ölçeklendirme kullanabilirsiniz. Horizontal Pod Autoscaler (HPA), CPU/bellek kullanımı gibi metriklere göre replikaları otomatik ayarlar.

```yaml
apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: myservice-hpa
spec:
  scaleTargetRef:
    apiVersion: apps/v1
    kind: Deployment
    name: myservice
  minReplicas: 1
  maxReplicas: 5
  metrics:
  - type: Resource
    resource:
      name: cpu
      target:
        type: Utilization
        averageUtilization: 50
```

Bu HPA, Rust servisini CPU kullanımına göre 1 ile 5 pod arasında ölçeklendirir. Ölçeklendirme stratejileri için farklı metrikler de kullanılabilir.

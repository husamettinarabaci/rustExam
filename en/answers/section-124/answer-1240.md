## 📘 Section: Microservices and Service Meshes
### 🔹 Category: Distributed Logging and Tracing with OpenTelemetry
#### ✅ Answer 1240: Scaling and auto-scaling Rust services

Scaling Rust microservices in Kubernetes is achieved by increasing pod replicas and using auto-scaling based on metrics. The Horizontal Pod Autoscaler (HPA) automatically adjusts replicas based on CPU/memory usage.

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

This HPA scales the Rust service between 1 and 5 pods based on CPU usage. Metrics can be customized for different scaling strategies.

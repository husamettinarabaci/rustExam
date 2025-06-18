## 📘 Section: Microservices Architecture Patterns  
### 🔹 Category: Autoscaling  
#### ✅ Answer 1348: Autoscaling in Rust microservices

Autoscaling optimizes resource usage by increasing the number of pods as load increases and decreasing them as load drops. For Rust microservices on Kubernetes, the Horizontal Pod Autoscaler (HPA) is used.

Below is a sample HPA YAML configuration:

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
This configuration launches new pods when CPU usage exceeds 70%.

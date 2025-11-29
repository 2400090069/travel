import numpy as np
import matplotlib.pyplot as plt
from sklearn.datasets import make_moons
from sklearn.svm import SVC

# Generate dataset
X, y = make_moons(n_samples=300, noise=0.25, random_state=42)

# Two classifiers
models = {
    "RBF Kernel": SVC(kernel="rbf", C=1, gamma="scale"),
    "Polynomial Kernel (degree 3)": SVC(kernel="poly", degree=3, C=1, gamma="scale")
}

fig, axes = plt.subplots(1, 2, figsize=(12, 5))

for ax, (name, model) in zip(axes, models.items()):
    model.fit(X, y)

    # Plot decision boundary
    x_min, x_max = X[:, 0].min() - 0.5, X[:, 0].max() + 0.5
    y_min, y_max = X[:, 1].min() - 0.5, X[:, 1].max() + 0.5
    xx, yy = np.meshgrid(
        np.linspace(x_min, x_max, 300),
        np.linspace(y_min, y_max, 300)
    )
    Z = model.predict(np.c_[xx.ravel(), yy.ravel()]).reshape(xx.shape)

    ax.contourf(xx, yy, Z, alpha=0.3)
    ax.scatter(X[:, 0], X[:, 1], c=y, edgecolor='k')

    # Plot support vectors
    ax.scatter(
        model.support_vectors_[:, 0],
        model.support_vectors_[:, 1],
        s=80,
        facecolors='none',
        edgecolors='red',
        linewidths=1.5,
        label="Support Vectors"
    )

    ax.set_title(name)
    ax.legend()

plt.tight_layout()
plt.show()
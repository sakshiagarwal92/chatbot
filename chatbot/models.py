from django.db import models

class User(models.Model):
    name = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)

    username = models.CharField(max_length=100)
    email = models.EmailField(default="sakshi@gmail.com")

    def __str__(self):
        return self.username

class Message(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    sender = models.CharField(max_length=10, choices=[('user', 'User'), ('bot', 'Bot')])
    message = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.sender}: {self.message[:50]}"

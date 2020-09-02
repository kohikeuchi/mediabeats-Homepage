from django.db import models

# Create your models here.
class Contact(models.Model):
    name = models.TextField(max_length=100, blank=True, null=True)
    email = models.TextField(max_length=100)
    subject = models.TextField(max_length=300, blank=True, null=True)
    content = models.TextField(max_length=3000)
    def __str__(self):
        return self.name



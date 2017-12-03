from django.db import models

# Create your models here.


class Subscribers(models.Model):
    name = models.CharField(max_length=20)
    email = models.EmailField()
    password = models.CharField(max_length=20)
    contact_num = models.CharField(max_length=15)
    street = models.CharField(max_length=30)
    area = models.CharField(max_length=15)
    city = models.CharField(max_length=20)
    district = models.CharField(max_length=20)

from django.contrib.auth.models import User
from django.db import models

class Food(models.Model):
    name = models.CharField(max_length=200)
    carbs = (models.FloatField())
    proteins = (models.FloatField())
    fats = (models.FloatField())
    calories = (models.FloatField())

    def __str__(self):
        return self.name


class Consume(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    food_consume = models.ForeignKey(Food,on_delete=models.CASCADE)
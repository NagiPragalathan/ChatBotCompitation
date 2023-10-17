from django.db import models

class TextEntry(models.Model):
    text = models.TextField()
    date = models.DateField(auto_now=True)

    def __str__(self):
        return self.text  # This is a string representation of the model instance

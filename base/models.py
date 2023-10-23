from django.db import models

class TextEntry(models.Model):
    text = models.TextField()
    date = models.DateField(auto_now=True)

    def __str__(self):
        return self.text  # This is a string representation of the model instance
class QA(models.Model):
    question = models.CharField(max_length=200, null=False)
    answer = models.CharField(max_length=200, null=False)
    def __str__(self):
        return self.question
    

from django import forms
from .models import *


class FormReg(forms.ModelForm):

    class Meta:
        model = Subscribers
        exclude = [""]
        

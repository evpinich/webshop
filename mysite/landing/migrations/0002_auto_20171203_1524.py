# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-12-03 15:24
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('landing', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='subscribers',
            name='city',
            field=models.CharField(max_length=20),
        ),
        migrations.AlterField(
            model_name='subscribers',
            name='district',
            field=models.CharField(max_length=20),
        ),
    ]

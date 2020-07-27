# Generated by Django 3.0.7 on 2020-06-24 08:45

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0013_auto_20200623_1323'),
    ]

    operations = [
        migrations.AlterField(
            model_name='archive',
            name='archive_published',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2020, 6, 24, 11, 45, 44, 701297), null=True, verbose_name='date published'),
        ),
        migrations.AlterField(
            model_name='tutorial',
            name='tutorial_published',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2020, 6, 24, 11, 45, 44, 700699), null=True, verbose_name='date published'),
        ),
        migrations.AlterField(
            model_name='tutorialseries',
            name='series_image',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]

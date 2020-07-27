# Generated by Django 3.0.7 on 2020-06-19 13:30

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0008_auto_20200609_1424'),
    ]

    operations = [
        migrations.CreateModel(
            name='Subscription',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(blank=True, max_length=254, null=True)),
                ('created_on', models.DateTimeField(auto_now_add=True, null=True)),
                ('receive', models.BooleanField(default=True)),
            ],
        ),
        migrations.AlterField(
            model_name='archive',
            name='archive_published',
            field=models.DateTimeField(default=datetime.datetime(2020, 6, 19, 16, 30, 1, 503252), verbose_name='date published'),
        ),
        migrations.AlterField(
            model_name='tutorial',
            name='tutorial_published',
            field=models.DateTimeField(default=datetime.datetime(2020, 6, 19, 16, 30, 1, 502690), verbose_name='date published'),
        ),
    ]

# Generated by Django 3.0.3 on 2020-02-21 14:59

from django.db import migrations, models
import django.utils.timezone


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='tutorial',
            name='allow_comments',
            field=models.BooleanField(default=True, verbose_name='allow comments'),
        ),
        migrations.AlterField(
            model_name='tutorial',
            name='tutorial_published',
            field=models.DateTimeField(default=django.utils.timezone.now),
        ),
    ]
